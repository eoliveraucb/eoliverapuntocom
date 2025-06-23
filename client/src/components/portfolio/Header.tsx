import { useState, useEffect } from "react";
import { useTheme } from "../ThemeProvider";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 theme-transition ${
          isScrolled ? "py-2 backdrop-blur-lg" : "py-4"
        }`}
        style={{ 
          backgroundColor: isScrolled ? `var(--bg-primary)cc` : 'var(--bg-primary)',
          boxShadow: 'var(--shadow)' 
        }}
      >
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <div 
              className="flex items-center gap-8 h-10 text-xl font-bold tracking-[0.625rem] font-['Fraunces']"
              style={{ color: 'var(--text-primary)' }}
            >
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--text-primary)' }}>
                {/* E */}
                <rect x="5" y="8" width="3" height="24" fill="currentColor"/>
                <rect x="5" y="8" width="12" height="3" fill="currentColor"/>
                <rect x="5" y="18.5" width="10" height="3" fill="currentColor"/>
                <rect x="5" y="29" width="12" height="3" fill="currentColor"/>
                
                {/* M */}
                <rect x="25" y="8" width="3" height="24" fill="currentColor"/>
                <rect x="40" y="8" width="3" height="24" fill="currentColor"/>
                <polygon points="28,8 31,15 34,8 37,8 31,20 25,8" fill="currentColor"/>
                
                {/* Logo mark */}
                <circle cx="95" cy="20" r="12" stroke="currentColor" stroke-width="2" fill="none"/>
                <circle cx="95" cy="20" r="6" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 list-none">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "portfolio", label: "Portfolio" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="nav-link font-medium hover:opacity-80 transition-opacity font-['Fraunces']"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:rotate-12 transition-transform duration-300"
              style={{ color: 'var(--text-primary)' }}
            >
              <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"} text-lg`}></i>
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              style={{ color: 'var(--text-primary)' }}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu md:hidden fixed top-0 left-0 w-full h-screen z-40 ${
          isMobileMenuOpen ? "open" : ""
        }`}
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About" },
            { id: "portfolio", label: "Portfolio" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-medium hover:opacity-80 transition-opacity mobile-nav-link font-['Fraunces']"
              style={{ color: 'var(--text-primary)' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
