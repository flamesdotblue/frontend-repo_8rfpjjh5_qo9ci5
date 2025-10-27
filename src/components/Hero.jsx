import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl py-28 sm:py-40"
        >
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
            Minimal, modern portfolio with playful interactions
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            I craft clean interfaces, smooth micro-interactions, and blazing fast user experiences. Explore selected work and say hello.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors">View projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">Get in touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
