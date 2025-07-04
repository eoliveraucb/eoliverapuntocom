import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle page navigation and scroll positioning
    if (location && !location.includes('#')) {
      // For mobile devices, scroll to page title instead of top for better UX
      const isMobile = window.innerWidth < 768;
      const pageTitle = document.getElementById('page-title');
      
      if (isMobile && pageTitle && location !== '/') {
        // Scroll to page title on mobile for inner pages
        setTimeout(() => {
          const headerHeight = 80;
          const elementPosition = pageTitle.offsetTop - headerHeight;
          window.scrollTo({
            top: elementPosition,
            left: 0,
            behavior: "smooth"
          });
        }, 200);
      } else {
        // Scroll to top for desktop or home page
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
}
