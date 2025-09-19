import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const tabs = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Tech Stack', id: 'tech-stack' },
    // { name: 'Hobbies', id: 'hobbies' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add temporary padding to account for navbar
      const tempPadding = document.createElement('div');
      tempPadding.style.height = '80px';
      element.insertBefore(tempPadding, element.firstChild);

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Remove temporary padding after scroll
      setTimeout(() => {
        if (tempPadding.parentNode) {
          tempPadding.parentNode.removeChild(tempPadding);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = tabs.map(tab => tab.id);
      const scrollPosition = window.scrollY + 200; // Fixed offset instead of viewport center

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-base-300/90 backdrop-blur-sm shadow-sm border-b border-base-content/10">
      <div className="navbar-center">
        <div role="tablist" className="tabs tabs-border">
          {tabs.map(({ name, id }) => (
            <button
              key={id}
              role="tab"
              onClick={() => scrollToSection(id)}
              className={`tab transition-colors duration-200 ${
                activeSection === id ? 'tab-active text-primary' : 'hover:text-primary'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
