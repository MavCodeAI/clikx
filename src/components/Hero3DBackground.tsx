'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const Hero3DBackground = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 100, 200]} scale={2}>
        <meshStandardMaterial color="#f2c94c" wireframe />
      </Sphere>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default Hero3DBackground;
