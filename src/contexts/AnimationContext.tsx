import React, { createContext, useContext } from 'react';

export interface AnimationConfig {
  // Easing functions
  easeInOutCubic: [number, number, number, number];
  easeOutQuart: [number, number, number, number];
  easeInOutQuart: [number, number, number, number];

  // Duration variables (in seconds)
  duration: {
    fast: number;    // 200ms
    normal: number;  // 300ms
    slow: number;    // 500ms
    slower: number;  // 800ms
  };

  // Stagger delays
  stagger: {
    fast: number;    // 50ms
    normal: number;  // 100ms
    slow: number;    // 150ms
  };

  // Reduced motion support
  prefersReducedMotion: boolean;

  // Animation reduction factors
  reducedMotionMultiplier: number;

  // Common animation variants
  variants: {
    fadeIn: {
      initial: { opacity: number };
      animate: { opacity: number };
      exit: { opacity: number };
    };
    fadeInUp: {
      initial: { opacity: number; y: number };
      animate: { opacity: number; y: number };
      exit: { opacity: number; y: number };
    };
    scaleIn: {
      initial: { opacity: number; scale: number };
      animate: { opacity: number; scale: number };
      exit: { opacity: number; scale: number };
    };
    slideInLeft: {
      initial: { opacity: number; x: number };
      animate: { opacity: number; x: number };
      exit: { opacity: number; x: number };
    };
    slideInRight: {
      initial: { opacity: number; x: number };
      animate: { opacity: number; x: number };
      exit: { opacity: number; x: number };
    };
  };
}

const defaultConfig: AnimationConfig = {
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],

  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },

  stagger: {
    fast: number;    // 50ms
    normal: number;  // 100ms
    slow: number;    // 150ms
  };

  // Reduced motion support
  prefersReducedMotion: boolean;

  // Animation reduction factors
  reducedMotionMultiplier: number;
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -30 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 30 }
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -30 }
    },
  },
};

const AnimationContext = createContext<AnimationConfig>(defaultConfig);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnimationContext.Provider value={defaultConfig}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};

export default AnimationContext;
