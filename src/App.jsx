import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        {/* About section (compact) */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                I’m a frontend-focused developer and designer who loves clean typography, accessible patterns, and subtle motion. My work blends craft and code to deliver interfaces that feel effortless.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Accessibility', 'Design Systems'].map((s) => (
                  <span key={s} className="rounded-full bg-gray-100 text-gray-700 text-xs px-3 py-1">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
}

export default App;
