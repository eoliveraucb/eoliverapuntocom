import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  List,
  ListOrdered,
  Link,
  Image,
  Undo,
  Redo,
  Type,
  Palette
} from 'lucide-react';

interface EditorState {
  content: string;
  selection: { start: number; end: number } | null;
}

export function WysiwygEditor() {
  const [content, setContent] = useState('<p>Start typing your content here...</p>');
  const [history, setHistory] = useState<EditorState[]>([{ content, selection: null }]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const editorRef = useRef<HTMLDivElement>(null);

  // Save to history
  const saveToHistory = (newContent: string) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push({ content: newContent, selection: null });
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Execute formatting command
  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      setContent(newContent);
      saveToHistory(newContent);
    }
  };

  // Undo/Redo
  const undo = () => {
    if (historyIndex > 0) {
      const prevState = history[historyIndex - 1];
      setContent(prevState.content);
      setHistoryIndex(historyIndex - 1);
      if (editorRef.current) {
        editorRef.current.innerHTML = prevState.content;
      }
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setContent(nextState.content);
      setHistoryIndex(historyIndex + 1);
      if (editorRef.current) {
        editorRef.current.innerHTML = nextState.content;
      }
    }
  };

  // Handle content changes
  const handleInput = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      setContent(newContent);
    }
  };

  // Insert link
  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      execCommand('createLink', url);
    }
  };

  // Insert image
  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      execCommand('insertImage', url);
    }
  };

  // Change font size
  const changeFontSize = (size: string) => {
    execCommand('fontSize', size);
  };

  // Change text color
  const changeTextColor = (color: string) => {
    execCommand('foreColor', color);
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = content;
    }
  }, []);

  const toolbarButtons = [
    { icon: Undo, action: undo, title: 'Undo', disabled: historyIndex <= 0 },
    { icon: Redo, action: redo, title: 'Redo', disabled: historyIndex >= history.length - 1 },
    { type: 'separator' as const },
    { icon: Bold, action: () => execCommand('bold'), title: 'Bold' },
    { icon: Italic, action: () => execCommand('italic'), title: 'Italic' },
    { icon: Underline, action: () => execCommand('underline'), title: 'Underline' },
    { type: 'separator' as const },
    { icon: AlignLeft, action: () => execCommand('justifyLeft'), title: 'Align Left' },
    { icon: AlignCenter, action: () => execCommand('justifyCenter'), title: 'Align Center' },
    { icon: AlignRight, action: () => execCommand('justifyRight'), title: 'Align Right' },
    { type: 'separator' as const },
    { icon: List, action: () => execCommand('insertUnorderedList'), title: 'Bullet List' },
    { icon: ListOrdered, action: () => execCommand('insertOrderedList'), title: 'Numbered List' },
    { type: 'separator' as const },
    { icon: Link, action: insertLink, title: 'Insert Link' },
    { icon: Image, action: insertImage, title: 'Insert Image' },
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Type className="w-5 h-5" />
          Visual Editor
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 p-3 border rounded-t-lg bg-gray-50 dark:bg-gray-800">
          {/* Font Size Dropdown */}
          <select 
            onChange={(e) => changeFontSize(e.target.value)}
            className="px-2 py-1 text-sm border rounded bg-white dark:bg-gray-700 dark:border-gray-600"
            title="Font Size"
          >
            <option value="1">Small</option>
            <option value="3" selected>Normal</option>
            <option value="5">Large</option>
            <option value="7">Huge</option>
          </select>

          {/* Color Picker */}
          <div className="flex items-center gap-1">
            <Palette className="w-4 h-4" />
            <input
              type="color"
              onChange={(e) => changeTextColor(e.target.value)}
              className="w-8 h-8 border rounded cursor-pointer"
              title="Text Color"
            />
          </div>

          <Separator orientation="vertical" className="h-6 mx-1" />

          {/* Formatting Buttons */}
          {toolbarButtons.map((button, index) => {
            if (button.type === 'separator') {
              return <Separator key={index} orientation="vertical" className="h-6 mx-1" />;
            }

            const IconComponent = button.icon!;
            return (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={button.action}
                disabled={button.disabled}
                title={button.title}
                className="h-8 w-8 p-0"
              >
                <IconComponent className="w-4 h-4" />
              </Button>
            );
          })}
        </div>

        {/* Editor Content */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onBlur={() => saveToHistory(content)}
          className="min-h-[400px] p-4 border border-t-0 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:border-gray-600"
          style={{
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
          }}
          suppressContentEditableWarning
        />

        {/* Footer Info */}
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <div>
            Characters: {content.replace(/<[^>]*>/g, '').length}
          </div>
          <div className="flex gap-4">
            <span>History: {historyIndex + 1}/{history.length}</span>
            <button 
              onClick={() => {
                const htmlOutput = content;
                navigator.clipboard.writeText(htmlOutput);
                alert('HTML copied to clipboard!');
              }}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Copy HTML
            </button>
          </div>
        </div>

        {/* HTML Preview */}
        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
            View HTML Source
          </summary>
          <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-x-auto">
            <code>{content}</code>
          </pre>
        </details>
      </CardContent>
    </Card>
  );
}