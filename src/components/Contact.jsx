import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Let’s build something great</h2>
          <p className="mt-3 text-gray-600">I’m available for freelance work, collaborations, and full-time opportunities. Reach out and say hello.</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
        <div className="mt-16 text-center text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </section>
  );
}
