import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-commerce Redesign',
    description: 'High-converting storefront with sleek product interactions and fast navigation.',
    tags: ['React', 'Tailwind', 'UX'],
  },
  {
    title: 'SaaS Dashboard',
    description: 'Clean analytics UI with smooth transitions and real-time data visualization.',
    tags: ['Next.js', 'Charts', 'Design System'],
  },
  {
    title: 'Portfolio Builder',
    description: 'Composable portfolio blocks with motion primitives and themeable styles.',
    tags: ['Framer Motion', 'Accessibility', 'Performance'],
  },
];

function Card({ title, description, tags, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-rose-50 to-orange-50" />
      <div className="relative">
        <div className="h-40 w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-5 group-hover:from-rose-100 group-hover:to-orange-100 transition-colors" />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-gray-100 text-gray-700 text-xs px-3 py-1">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Selected Projects</h2>
          <p className="mt-3 text-gray-600">A curated collection of interfaces and systems focused on clarity, motion, and performance.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
