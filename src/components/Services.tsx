import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';

const Services = () => {
  const services = [
    {
      name: 'Web Development',
      description: 'Building modern, scalable web applications with cutting-edge technologies and performance optimization.',
      icon: '💻'
    },
    {
      name: 'UI/UX Design',
      description: 'Creating intuitive, user-centered designs that balance aesthetics with functionality and accessibility.',
      icon: '🎨'
    },
    {
      name: 'Motion & 3D Graphics',
      description: 'Crafting engaging animations and 3D experiences that bring interfaces to life with visual storytelling.',
      icon: '✨'
    }
  ];

  return (
    <section className="py-20 px-6 bg-[var(--background)] relative overflow-hidden">
      {/* Background micro-animations */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-0.5 bg-purple-200"
            style={{
              left: `${10 + i * 25}%`,
              top: `${50 + (i % 2) * 20}%`,
              width: '60px',
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-4">
            Services
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            We offer comprehensive creative services to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Subtle accent on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>

                {/* Service Name */}
                <motion.h3
                  className="text-xl font-semibold text-[var(--foreground)] mb-4"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.name}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-[var(--text-secondary)] leading-relaxed"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.description}
                </motion.p>

                {/* Subtle bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </div>
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
          <p className="text-[var(--text-secondary)]">
            Ready to start your project?{' '}
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Get in touch →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
