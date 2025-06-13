'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import SvgFigure from './figure';
import { Suspense } from 'react';

const Loading = () => {
  return (
    <Html center>
      <p style={{ color: 'white' }}>Loading...</p>
    </Html>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <SvgFigure />
    </>
  );
};

export const CustomCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
      <Suspense fallback={<Loading />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};
