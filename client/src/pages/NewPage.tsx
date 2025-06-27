
import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import RadialMandala from '@/components/portfolio/RadialMandala';



// Custom component example
function CustomCounter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">Custom Counter Component</h3>
      <div className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
        {count}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setCount(count - 1)} variant="outline" size="sm">
          -
        </Button>
        <Button onClick={() => setCount(count + 1)} size="sm">
          +
        </Button>
        <Button onClick={() => setCount(0)} variant="destructive" size="sm">
          Reset
        </Button>
      </div>
    </div>
  );
}

export function NewPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [progress, setProgress] = useState(33);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            New Page with Components
          </h1>
          <p className="text-xl mb-4" style={{ color: 'var(--text-secondary)' }}>
            This page demonstrates various UI components and custom functionality.
          </p>

          <div className="mb-8">
            <RadialMandala />
          </div>

          <div className="flex gap-2 mb-6">
            <Badge>React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
          </div>
        </div>

        <Tabs defaultValue="components" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="components">UI Components</TabsTrigger>
            <TabsTrigger value="form">Form Example</TabsTrigger>
            <TabsTrigger value="custom">Custom Components</TabsTrigger>
            <TabsTrigger value="progress">Progress & Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>
                    A simple card component
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>This is a basic card with some content. Cards are great for organizing information.</p>
                  <Button className="mt-4">Learn More</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>
                    Card with buttons and actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="default" className="w-full">Primary Action</Button>
                    <Button variant="outline" className="w-full">Secondary</Button>
                    <Button variant="ghost" className="w-full">Ghost Button</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Input Examples</CardTitle>
                  <CardDescription>
                    Various input components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Enter text here..." />
                  <Input type="email" placeholder="Email address" />
                  <Input type="number" placeholder="Number input" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="form" className="space-y-6">
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Contact Form Example</CardTitle>
                <CardDescription>
                  A functional form using various UI components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your message here..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <CustomCounter />
              
              <Card>
                <CardHeader>
                  <CardTitle>Component Guidelines</CardTitle>
                  <CardDescription>
                    How to add more components
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">1. Import UI Components</h4>
                      <p className="text-sm text-gray-600">Import from @/components/ui/</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">2. Create Custom Components</h4>
                      <p className="text-sm text-gray-600">Define inline or in separate files</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">3. Add State & Logic</h4>
                      <p className="text-sm text-gray-600">Use React hooks for interactivity</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Progress Indicators</CardTitle>
                  <CardDescription>
                    Visual feedback components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Progress: {progress}%</Label>
                    <Progress value={progress} className="mt-2" />
                    <div className="flex gap-2 mt-3">
                      <Button onClick={() => setProgress(Math.max(0, progress - 10))} variant="outline" size="sm">
                        -10%
                      </Button>
                      <Button onClick={() => setProgress(Math.min(100, progress + 10))} size="sm">
                        +10%
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert>
                <AlertDescription>
                  This is an informational alert. You can use alerts to provide important messages to users.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-200 bg-green-50">
                <AlertDescription className="text-green-800">
                  Success! This is a success alert with custom styling.
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50">
                <AlertDescription className="text-yellow-800">
                  Warning: This is a warning alert to draw attention.
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
