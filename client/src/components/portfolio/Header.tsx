import { useState, useEffect } from "react";
import { useTheme } from "../ThemeProvider";
import { Link } from "wouter";
import emlogo from "../../assets/emlogo.svg";

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
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                <img 
                  src={emlogo} 
                  alt="Logo" 
                  className="h-5 w-5"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center gap-8">
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
                <li>
                  <Link href="/cv">
                    <button className="nav-link font-medium hover:opacity-80 transition-opacity font-['Fraunces']" style={{ color: 'var(--text-primary)' }}>
                      CV
                    </button>
                  </Link>
                </li>
              </ul>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-3 ml-6 border-l border-gray-600 pl-6">
                <a 
                  href="https://www.linkedin.com/in/emolivera/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <i className="fab fa-linkedin text-white text-sm"></i>
                </a>
                <a 
                  href="https://www.instagram.com/unkerned" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <i className="fab fa-instagram text-white text-sm"></i>
                </a>
                <a 
                  href="https://wa.link/p5civg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <i className="fab fa-whatsapp text-white text-sm"></i>
                </a>
                <a 
                  href="https://discord.com/channels/1282866549925085206" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <i className="fab fa-discord text-white text-sm"></i>
                </a>
                <a 
                  href="https://soundcloud.com/e-mauricio-olivera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <i className="fab fa-soundcloud text-white text-sm"></i>
                </a>
                <a 
                  href="https://www.behance.net/emolivera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <i className="fab fa-behance text-white text-sm"></i>
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
          <Link href="/cv">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium hover:opacity-80 transition-opacity mobile-nav-link font-['Fraunces']"
              style={{ color: 'var(--text-primary)' }}
            >
              CV
            </button>
          </Link>
          
          {/* Mobile Social Media Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a 
              href="https://www.linkedin.com/in/emolivera/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-linkedin text-white text-lg"></i>
            </a>
            <a 
              href="https://www.instagram.com/unkerned" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-instagram text-white text-lg"></i>
            </a>
            <a 
              href="https://wa.link/p5civg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-whatsapp text-white text-lg"></i>
            </a>
            <a 
              href="https://discord.com/channels/1282866549925085206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-discord text-white text-lg"></i>
            </a>
            <a 
              href="https://soundcloud.com/e-mauricio-olivera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-soundcloud text-white text-lg"></i>
            </a>
            <a 
              href="https://www.behance.net/emolivera" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <i className="fab fa-behance text-white text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
