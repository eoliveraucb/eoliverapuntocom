import { useState } from 'react';
import { Edit3, X } from 'lucide-react';
import { WysiwygEditor } from '../WysiwygEditor';

export function AreasOfFocus() {
  const [isEditing, setIsEditing] = useState(false);
  const defaultContent = `
    <div class="space-y-12">
      <div class="text-center max-w-4xl mx-auto mb-16">
        <p class="text-lg" style="color: var(--text-secondary)">
          Key areas where design education intersects with social innovation, technology, and community building.
        </p>
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <div class="rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1" style="background-color: var(--bg-secondary); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);" data-testid="card-hands-on-learning">
          <h3 class="text-2xl font-['Fraunces'] font-bold mb-4" style="color: var(--text-primary)">
            Hands-on Learning
          </h3>
          <p class="text-base leading-relaxed" style="color: var(--text-secondary)">
            Creating <span style="color: var(--accent-primary); font-weight: 600;">hands-on, cross-disciplinary</span> learning experiences that engage multiple senses and encourage active participation across diverse fields of study.
          </p>
        </div>

        <div class="rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1" style="background-color: var(--bg-secondary); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);" data-testid="card-analog-digital">
          <h3 class="text-2xl font-['Fraunces'] font-bold mb-4" style="color: var(--text-primary)">
            Analog & Digital Integration
          </h3>
          <p class="text-base leading-relaxed" style="color: var(--text-secondary)">
            Integrating <span style="color: var(--accent-primary); font-weight: 600;">analog</span> and <span style="color: var(--accent-primary); font-weight: 600;">digital</span> approaches for skill-building, combining traditional methods with modern technology to create comprehensive learning pathways.
          </p>
        </div>

        <div class="rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1" style="background-color: var(--bg-secondary); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);" data-testid="card-peer-mentorship">
          <h3 class="text-2xl font-['Fraunces'] font-bold mb-4" style="color: var(--text-primary)">
            Peer Mentorship
          </h3>
          <p class="text-base leading-relaxed" style="color: var(--text-secondary)">
            Supporting <span style="color: var(--accent-primary); font-weight: 600;">peer mentorship</span> and <span style="color: var(--accent-primary); font-weight: 600;">community-led</span> education initiatives that foster collaborative learning and knowledge sharing among participants.
          </p>
        </div>

        <div class="rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1" style="background-color: var(--bg-secondary); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);" data-testid="card-cultural-knowledge">
          <h3 class="text-2xl font-['Fraunces'] font-bold mb-4" style="color: var(--text-primary)">
            Cultural Knowledge Bridge
          </h3>
          <p class="text-base leading-relaxed" style="color: var(--text-secondary)">
            Bridging <span style="color: var(--accent-primary); font-weight: 600;">cultural knowledge</span> with new technology, including <span style="color: var(--accent-primary); font-weight: 600;">AI</span>, to preserve traditional wisdom while embracing innovative solutions for modern challenges.
          </p>
        </div>
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

    if (typeof window !== 'undefined') {
      localStorage.setItem('focus-content', newContent);
    }
  };

  const isEditModeEnabled = () => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      return token === 'your_secret_token';
    }
    return false;
  };

  return (
    <section 
      className="py-20 px-4 sm:px-6 lg:px-8" 
      style={{ backgroundColor: 'var(--bg-primary)' }}
      data-testid="section-areas-of-focus"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="text-center w-full">
            <h2 
              className="text-3xl md:text-4xl font-['Fraunces'] font-bold mb-4"
              style={{ color: 'var(--text-primary)' }}
              data-testid="heading-areas-of-focus"
            >
              Areas of Focus
            </h2>
          </div>

          {!isEditing && isEditModeEnabled() ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 ml-4"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: 'white'
              }}
              data-testid="button-edit-focus"
            >
              <Edit3 className="w-4 h-4" />
              Edit
            </button>
          ) : (
            isEditing ? (
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-500 ml-4"
              style={{ 
                backgroundColor: 'var(--text-tertiary)',
                color: 'white'
              }}
              data-testid="button-cancel-focus"
            >
              <X className="w-4 h-4" />
              Cancel
            </button>
            ) : null
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
