import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/portfolio/Header";
import { WysiwygEditor } from "@/components/WysiwygEditor";
import { ArrowLeft, Edit3, Lock } from "lucide-react";
import { isEditModeEnabled } from "../lib/auth";

export default function Editor() {
  if (!isEditModeEnabled()) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />

        <div className="container mx-auto px-4 pt-24 md:pt-8 pb-8">
          <div className="text-center py-16">
            <Lock className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Access Restricted
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              You need special access to view this page.
            </p>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="container mx-auto px-4 pt-24 md:pt-8 pb-8"></div>
      <div className="mb-8">
        <Link href="/">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Edit3 className="w-8 h-8 text-purple-600" />
          <div>
            <h1
              id="page-title"
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white scroll-mt-20"
            >
              Visual Editor
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Create and edit rich text content with formatting tools
            </p>
          </div>
        </div>
      </div>

      <WysiwygEditor />

      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Editor Features</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Text Formatting</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Bold, Italic, Underline</li>
              <li>• Font size selection</li>
              <li>• Text color picker</li>
              <li>• Text alignment options</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Content Features</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Bullet and numbered lists</li>
              <li>• Link insertion</li>
              <li>• Image embedding</li>
              <li>• Undo/Redo functionality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
