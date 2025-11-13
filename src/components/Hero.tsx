import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '@/contexts/AnimationContext';
import Hero3DWrapper from './Hero3DWrapper';

const Hero = () => {
  const { duration, easeInOutCubic, variants } = useAnimation();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      {/* Optional 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3DWrapper />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight mb-6"
          initial={variants.fadeInUp.initial}
          animate={variants.fadeInUp.animate}
          transition={{ duration: duration.slower, ease: easeInOutCubic }}
        >
          Designing clarity into the digital world.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
          initial={variants.fadeIn.initial}
          animate={variants.fadeIn.animate}
          transition={{ duration: duration.slow, ease: easeInOutCubic, delay: duration.normal }}
        >
          Clikxo is a creative studio by AB Darwesh & Ali Khan — crafting high-performance digital experiences.
        </motion.p>
      </div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hover-target cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M5 12L12 19L19 12" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
