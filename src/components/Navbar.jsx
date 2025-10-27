import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur bg-white/60 border-b border-black/5' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-gray-900">/ portfolio</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-gray-800 transition-colors">Let’s talk</a>
        </div>
      </div>
    </header>
  );
}
