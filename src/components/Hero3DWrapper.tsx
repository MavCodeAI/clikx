'use client';

import dynamic from 'next/dynamic';

// Dynamically import heavy 3D components
const Hero3DBackground = dynamic(() => import('./Hero3DBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
});

export default Hero3DBackground;
