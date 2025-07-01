
import { useState } from 'react';
import { Edit3, X } from 'lucide-react';
import { WysiwygEditor } from '../WysiwygEditor';

export function AreasOfFocus() {
  const [isEditing, setIsEditing] = useState(false);
  const defaultContent = `
    <div class="grid md:grid-cols-3 gap-6">
      <div class="text-center p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h3 class="font-bold text-xl mb-3">Digital Education</h3>
        <p>Developing innovative learning experiences that merge technology with pedagogy, focusing on accessibility and cultural relevance.</p>
      </div>
      
      <div class="text-center p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h3 class="font-bold text-xl mb-3">Social Innovation</h3>
        <p>Using design as a catalyst for social transformation, with emphasis on community engagement and participatory approaches.</p>
      </div>
      
      <div class="text-center p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
        </div>
        <h3 class="font-bold text-xl mb-3">Design Research</h3>
        <p>Conducting user-centered research to understand cultural contexts and inform design decisions that create meaningful impact.</p>
      </div>
    </div>
  `;
  
  const [focusContent, setFocusContent] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('focus-content');
      return saved || defaultContent;
    }
    return defaultContent;
  });

  const handleSave = (newContent: string) => {
    setFocusContent(newContent);
    setIsEditing(false);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('focus-content', newContent);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="text-center w-full">
            <h2 
              className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Areas of Focus
            </h2>
            <p 
              className="text-lg max-w-3xl mx-auto"
              style={{ color: 'var(--text-secondary)' }}
            >
              Core areas where design meets education and social impact
            </p>
          </div>
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 ml-4"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: 'white'
              }}
            >
              <Edit3 className="w-4 h-4" />
              Edit
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-500 ml-4"
              style={{ 
                backgroundColor: 'var(--text-tertiary)',
                color: 'white'
              }}
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <WysiwygEditor 
              initialContent={focusContent}
              onSave={handleSave}
              onCancel={() => setIsEditing(false)}
            />
          </div>
        ) : (
          <div 
            className="focus-content"
            style={{ color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: focusContent }}
          />
        )}
      </div>
    </section>
  );
}
