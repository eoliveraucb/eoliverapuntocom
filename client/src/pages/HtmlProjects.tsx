import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/portfolio/Header";
import { ArrowLeft, Code, ExternalLink, Github } from "lucide-react";

interface HtmlProject {
  id: string;
  title: string;
  description: string;
  preview: string;
  features: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const htmlProjects: HtmlProject[] = [
  {
    id: 'basic-portfolio',
    title: 'Basic Portfolio Site',
    description: 'A simple personal portfolio using only HTML and CSS',
    preview: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .header { text-align: center; margin-bottom: 40px; }
        .section { margin: 20px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>John Doe</h1>
        <p>Web Developer</p>
    </div>
    <div class="section">
        <h2>About Me</h2>
        <p>I'm a passionate web developer...</p>
    </div>
</body>
</html>`,
    features: ['Clean HTML structure', 'Basic CSS styling', 'Responsive design', 'Contact form'],
    difficulty: 'Beginner'
  },
  {
    id: 'landing-page',
    title: 'Product Landing Page',
    description: 'A marketing landing page with modern design',
    preview: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazing Product</title>
    <style>
        body { margin: 0; font-family: 'Arial', sans-serif; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                color: white; padding: 100px 20px; text-align: center; }
        .cta-button { background: #ff6b6b; color: white; padding: 15px 30px; 
                     border: none; border-radius: 5px; font-size: 18px; }
    </style>
</head>
<body>
    <div class="hero">
        <h1>Revolutionary Product</h1>
        <p>Transform your workflow today</p>
        <button class="cta-button">Get Started</button>
    </div>
</body>
</html>`,
    features: ['Hero section', 'Call-to-action buttons', 'Gradient backgrounds', 'Feature showcase'],
    difficulty: 'Intermediate'
  },
  {
    id: 'interactive-form',
    title: 'Interactive Contact Form',
    description: 'A comprehensive form with validation and styling',
    preview: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        .form-container { max-width: 500px; margin: 50px auto; padding: 20px; }
        .form-group { margin-bottom: 20px; }
        input, textarea { width: 100%; padding: 10px; border: 1px solid #ddd; }
        .submit-btn { background: #4CAF50; color: white; padding: 12px 24px; }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Contact Us</h2>
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" required>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
        </form>
    </div>
</body>
</html>`,
    features: ['Form validation', 'Input styling', 'Responsive layout', 'Accessibility features'],
    difficulty: 'Intermediate'
  },
  {
    id: 'css-animation',
    title: 'CSS Animation Showcase',
    description: 'Interactive elements with pure CSS animations',
    preview: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations</title>
    <style>
        .container { padding: 50px; text-align: center; }
        .bounce { animation: bounce 2s infinite; }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
        }
        .animated-box { width: 100px; height: 100px; background: #3498db; margin: 20px auto; }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Animation Demo</h1>
        <div class="animated-box bounce"></div>
    </div>
</body>
</html>`,
    features: ['CSS keyframes', 'Hover effects', 'Transitions', 'Transform properties'],
    difficulty: 'Advanced'
  }
];

export default function HtmlProjects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 md:pt-8 pb-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <Code className="w-8 h-8 text-blue-600" />
            <div>
              <h1
                id="page-title"
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white scroll-mt-20"
              >
                HTML Project Examples
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Basic HTML and CSS projects for learning and inspiration
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {htmlProjects.map((project) => (
            <Card key={project.id} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <Link href={`/html-projects/${project.id}`}>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 rounded p-3">
                  <h4 className="font-medium mb-2 text-sm">Preview:</h4>
                  <pre className="text-xs overflow-x-auto text-gray-700 dark:text-gray-300 max-h-32">
                    <code>{project.preview.substring(0, 200)}...</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6">
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">What You'll Learn</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• HTML5 semantic elements</li>
                <li>• CSS layout techniques</li>
                <li>• Responsive design principles</li>
                <li>• Form handling and validation</li>
                <li>• CSS animations and transitions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Tools Needed</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Text editor (VS Code, Sublime)</li>
                <li>• Web browser for testing</li>
                <li>• Developer tools for debugging</li>
                <li>• Optional: Live server extension</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <Link href="/editor">
              <Button>
                <Code className="w-4 h-4 mr-2" />
                Try the Visual Editor
              </Button>
            </Link>
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}