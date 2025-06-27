
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function NewPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            New Page
          </h1>
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            This is your new manually created page.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Page Content</CardTitle>
              <CardDescription>
                Add your content here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a sample content area. You can customize this page with any content you need.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                What you can do on this page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Add custom components</li>
                <li>Integrate with your existing design system</li>
                <li>Connect to your backend APIs</li>
                <li>Add interactive features</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
