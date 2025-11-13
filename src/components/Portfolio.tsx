import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { useAnimation } from '@/contexts/AnimationContext';

const Portfolio = () => {
  const { duration, easeInOutCubic, variants, stagger } = useAnimation();
  return (
    <section className="py-20 px-6 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={variants.fadeInUp.initial}
          whileInView={variants.fadeInUp.animate}
          transition={{ duration: duration.normal, ease: easeInOutCubic }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore our portfolio of creative projects and digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 hover-target cursor-pointer"
              initial={variants.fadeInUp.initial}
              whileInView={variants.fadeInUp.animate}
              transition={{ duration: duration.normal, ease: easeInOutCubic, delay: index * stagger.normal }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                transform: `translateY(${index * 10}px)`,
              }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Optimized project thumbnail */}
                  <Image
                    src="/images/projects/placeholder.jpg"
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index < 3} // Prioritize first 3 images
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                  />

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="text-center text-white p-6">
                      <motion.h3
                        className="text-xl font-bold mb-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-gray-300"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {project.shortDescription}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* Project info below image */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            View All Projects
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
