import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimation } from '@/contexts/AnimationContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { duration, easeInOutCubic, variants, stagger } = useAnimation();

  // Counter animation
  const [projects, setProjects] = useState<number>(0);
  const [years, setYears] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => {
        const interval1 = setInterval(() => {
          setProjects(prev => {
            if (prev >= 50) return 50;
            return prev + 1;
          });
        }, 30);
        return () => clearInterval(interval1);
      }, 500);

      const timer2 = setTimeout(() => {
        const interval2 = setInterval(() => {
          setYears(prev => {
            if (prev >= 5) return 5;
            return prev + 1;
          });
        }, 200);
        return () => clearInterval(interval2);
      }, 500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isInView]);

  const skills = [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Motion Design',
    '3D Interactions'
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-white to-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Abstract Background */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
              {/* Abstract animated background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%)',
                  backgroundSize: '100% 100%',
                }}
              />
              {/* Placeholder for portrait image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Portrait</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-6"
                initial={variants.fadeInUp.initial}
                whileInView={variants.fadeInUp.animate}
                transition={{ duration: duration.normal, ease: easeInOutCubic, delay: duration.normal }}
                viewport={{ once: true }}
              >
                About Clikxo
              </motion.h2>
              <motion.p
                className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8"
                initial={variants.fadeInUp.initial}
                whileInView={variants.fadeInUp.animate}
                transition={{ duration: duration.normal, ease: easeInOutCubic, delay: duration.slow }}
                viewport={{ once: true }}
              >
                Clikxo is a creative studio by AB Darwesh & Ali Khan — crafting high-performance digital experiences.
              </motion.p>
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--foreground)] shadow-sm border border-gray-200 hover-target cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: duration.fast, delay: index * stagger.normal }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Counters */}
            <motion.div
              className="grid grid-cols-2 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-[var(--foreground)] mb-2"
                  key={projects}
                >
                  {projects}+
                </motion.div>
                <div className="text-sm text-[var(--text-secondary)]">Projects Completed</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-[var(--foreground)] mb-2"
                  key={years}
                >
                  {years}+
                </motion.div>
                <div className="text-sm text-[var(--text-secondary)]">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
