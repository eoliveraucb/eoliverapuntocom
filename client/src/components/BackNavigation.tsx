import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

interface BackNavigationProps {
  href?: string;
  label?: string;
  className?: string;
}

export function BackNavigation({ 
  href = "/", 
  label = "Back to Home",
  className = ""
}: BackNavigationProps) {
  return (
    <div className={`fixed top-20 left-4 z-40 ${className}`}>
      <Link
        href={href}
        className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 backdrop-blur-sm"
        style={{ 
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          boxShadow: 'var(--shadow)'
        }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">{label}</span>
      </Link>
    </div>
  );
}