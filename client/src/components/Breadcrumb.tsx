import { Link, useLocation } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const [location] = useLocation();

  // Auto-generate breadcrumb items based on current route if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;

    const pathSegments = location.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      let label = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      // Custom labels for specific routes
      if (segment === 'selected-works') label = 'Selected Works';
      if (segment === 'cv') label = 'Resume';
      if (segment === 'design') label = 'Design';
      
      breadcrumbs.push({ label, href });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav 
      className={`flex items-center gap-2 text-sm ${className}`}
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight 
              className="w-3 h-3" 
              style={{ color: 'var(--text-secondary)' }} 
            />
          )}
          {index === 0 && <Home className="w-3 h-3" />}
          {index === breadcrumbs.length - 1 ? (
            <span 
              className="font-medium"
              style={{ color: 'var(--text-primary)' }}
            >
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:opacity-80 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}