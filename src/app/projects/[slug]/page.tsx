import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  // Type guard - project is now guaranteed to be defined
  const safeProject = project;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-[var(--foreground)] hover:text-gray-600 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <motion.div
        className="pt-20 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Project Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">
                {safeProject.category}
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                {safeProject.year}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-4">
              {safeProject.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
              {safeProject.description}
            </p>
          </motion.div>

          {/* Project Images */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {safeProject.images.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                  <Image
                    src="/images/projects/placeholder-detail.jpg"
                    alt={`${safeProject.title} - Project Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  />
              </motion.div>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {safeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                Links
              </h3>
              <div className="space-y-2">
                {safeProject.liveUrl && (
                  <a
                    href={safeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Live Project →
                  </a>
                )}
                {safeProject.githubUrl && (
                  <a
                    href={safeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </div>

            {/* Navigation to other projects */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">
                Other Projects
              </h3>
              <div className="space-y-2">
                {projects
                  .filter((p) => p.id !== safeProject.id)
                  .slice(0, 3)
                  .map((otherProject) => (
                    <Link
                      key={otherProject.id}
                      href={`/projects/${otherProject.id}`}
                      className="block text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {otherProject.title}
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
