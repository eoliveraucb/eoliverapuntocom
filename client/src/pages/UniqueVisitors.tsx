import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface VisitorRecord {
  ip: string;
  timestamp: string;
  userAgent: string;
  path: string;
  location?: {
    lat: number;
    lng: number;
    city?: string;
    country?: string;
  };
}

export function UniqueVisitors() {
  const [visitors, setVisitors] = useState<VisitorRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const validatePassword = async () => {
    try {
      const response = await fetch('/api/validate-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setAuthenticated(true);
        setError('');
        loadVisitors();
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Error validating password');
    }
  };

  const loadVisitors = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/unique-visitors', {
        headers: {
          'Authorization': `Bearer ${password}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const visitorsWithLocation = await Promise.all(
          data.map(async (visitor: VisitorRecord) => {
            try {
              // Get location data from ip-api.com (free service)
              const locationResponse = await fetch(`https://ip-api.com/json/${visitor.ip}`);

              if (!locationResponse.ok) {
                throw new Error(`HTTP ${locationResponse.status}`);
              }

              const locationData = await locationResponse.json();

              if (locationData.status === 'fail') {
                throw new Error(locationData.message || 'API request failed');
              }

              return {
                ...visitor,
                location: {
                    lat: locationData.lat,
                    lng: locationData.lon,
                    city: locationData.city,
                    country: locationData.country,
                  }
              };
            } catch (error) {
              console.error('Error getting location for IP:', visitor.ip, error);
               return {
                  ...visitor,
                  location: {
                    lat: 0,
                    lng: 0,
                    city: 'Unknown',
                    country: 'Unknown',
                  }
                };
            }
          })
        );

        setVisitors(visitorsWithLocation);
        initializeMap(visitorsWithLocation);
      } else {
        setError('Failed to load visitors');
        setAuthenticated(false);
      }
    } catch (err) {
      setError('Error loading visitors');
    } finally {
      setLoading(false);
    }
  };

  const initializeMap = (visitorsData: VisitorRecord[]) => {
    // Initialize Google Map
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    const googleMap = new google.maps.Map(mapElement, {
      zoom: 2,
      center: { lat: 0, lng: 0 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    // Add markers for each visitor
    visitorsData.forEach((visitor, index) => {
      if (visitor.location) {
        const marker = new google.maps.Marker({
          position: { lat: visitor.location.lat, lng: visitor.location.lng },
          map: googleMap,
          title: `${visitor.ip} - ${visitor.location.city}, ${visitor.location.country}`,
          label: String(index + 1),
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div>
              <h3>Visitor ${index + 1}</h3>
              <p><strong>IP:</strong> ${visitor.ip}</p>
              <p><strong>Location:</strong> ${visitor.location.city}, ${visitor.location.country}</p>
              <p><strong>Last Visit:</strong> ${new Date(visitor.timestamp).toLocaleString()}</p>
              <p><strong>User Agent:</strong> ${visitor.userAgent}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(googleMap, marker);
        });
      }
    });

    setMap(googleMap);
  };

  useEffect(() => {
    // Load Google Maps API
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Protected Area</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && validatePassword()}
              />
            </div>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button onClick={validatePassword} className="w-full">
              Access Visitor Data
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Last 20 Unique Visitors</h1>
          <Button onClick={() => setAuthenticated(false)} variant="outline">
            Logout
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-8">Loading visitors and location data...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map */}
            <Card className="lg:col-span-2 h-96">
              <CardHeader>
                <CardTitle>Visitor Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div id="map" className="w-full h-64 rounded-lg"></div>
              </CardContent>
            </Card>

            {/* Visitor List */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Visitor Details</CardTitle>
              </CardHeader>
              <CardContent>
                {visitors.length === 0 ? (
                  <p className="text-gray-600">No unique visitors recorded yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            #
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            IP Address
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Location
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Visit
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            User Agent
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {visitors.map((visitor, index) => (
                          <tr key={visitor.ip} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {visitor.ip}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {visitor.location ? 
                                `${visitor.location.city}, ${visitor.location.country}` : 
                                'Location unavailable'
                              }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {formatDate(visitor.timestamp)}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                              {visitor.userAgent}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        <div className="mt-6">
          <Button onClick={loadVisitors} disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh Data'}
          </Button>
        </div>
      </div>
    </div>
  );
}