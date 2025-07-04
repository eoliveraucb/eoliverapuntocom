import { useState, useEffect } from "react";
import { useTheme } from "../ThemeProvider";
import { Link, useLocation } from "wouter";
import emlogo from "../../assets/emlogo.svg";
import { isEditModeEnabled } from '../../lib/auth';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (item: any) => {
    setIsMobileMenuOpen(false);
    
    if (item.href.startsWith('/#')) {
      // Handle anchor links
      const sectionId = item.href.replace('/#', '');
      if (location === '/') {
        // Already on home page, just scroll
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        // Navigate to home page first, then scroll
        window.location.href = item.href;
        setTimeout(() => scrollToSection(sectionId), 800);
      }
    }
  };

  const baseNavItems = [
        { id: "home", label: "Home", href: "/" },
        { id: "about", label: "About", href: "/#about" },
        { id: "projects", label: "Teaching", href: "/#projects" },
        { id: "selected-works", label: "Design", href: "/#selected-works" },
        { id: "contact", label: "Contact", href: "/#contact" },
        { id: "cv", label: "CV", href: "/cv" },
      ];

  const navItems = isEditModeEnabled()
        ? [...baseNavItems, { id: "editor", label: "Editor", href: "/editor" }]
        : baseNavItems;

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
              <img 
                src={emlogo} 
                alt="Logo" 
                className="h-8"
                style={{ 
                  filter: 'invert(27%) sepia(51%) saturate(2878%) hue-rotate(246deg) brightness(104%) contrast(97%)'
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center gap-8">
              <ul className="flex gap-8 list-none">
                {navItems.map((item) => (
                  <li key={item.id}>
                    {item.href.startsWith('/#') ? (
                      <button
                        onClick={() => handleNavClick(item)}
                        className="nav-link font-medium hover:opacity-80 transition-opacity font-['Fraunces'] bg-transparent border-none cursor-pointer"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link 
                        href={item.href} 
                        className="nav-link font-medium hover:opacity-80 transition-opacity font-['Fraunces']" 
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 ml-6 border-l border-gray-600 pl-6">
                <a 
                  href="https://www.linkedin.com/in/emolivera/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <i className="fab fa-linkedin text-lg"></i>
                </a>
                <a 
                  href="https://www.instagram.com/unkerned" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a 
                  href="https://wa.link/p5civg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                </a>
                <a 
                  href="https://discord.com/channels/1282866549925085206" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <i className="fab fa-discord text-lg"></i>
                </a>
                <a 
                  href="https://soundcloud.com/e-mauricio-olivera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <i className="fab fa-soundcloud text-lg"></i>
                </a>
                <a 
                  href="https://www.behance.net/emolivera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <i className="fab fa-behance text-lg"></i>
                </a>
              </div>
            </div>
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
          {navItems.map((item) => (
            item.href.startsWith('/#') ? (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="text-2xl font-medium hover:opacity-80 transition-opacity mobile-nav-link font-['Fraunces'] bg-transparent border-none cursor-pointer"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.label}
              </button>
            ) : (
              <Link 
                key={item.id} 
                href={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-medium hover:opacity-80 transition-opacity mobile-nav-link font-['Fraunces']"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.label}
              </Link>
            )
          ))}

          {/* Mobile Social Media Icons */}
          <div className="flex items-center gap-6 mt-4">
            <a 
              href="https://www.linkedin.com/in/emolivera/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              style={{ color: 'var(--accent-primary)' }}
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a 
              href="https://www.instagram.com/unkerned" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              style={{ color: 'var(--accent-primary)' }}
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a 
              href="https://wa.link/p5civg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              style={{ color: 'var(--accent-primary)' }}
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a 
              href="https://discord.com/channels/1282866549925085206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              style={{ color: 'var(--accent-primary)' }}
            >
              <i className="fab fa-discord text-2xl"></i>
            </a>
            <a 
              href="https://soundcloud.com/e-mauricio-olivera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              style={{ color: 'var(--accent-primary)' }}
            >
              <i className="fab fa-soundcloud text-2xl"></i>
            </a>
            <a 
              href="https://www.behance.net/emolivera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              style={{ color: 'var(--accent-primary)' }}
            >
              <i className="fab fa-behance text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
