'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import SvgFigure from './figure';
import { Suspense } from 'react';

const Loading = () => {
  return <h1>Loading</h1>;
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <SvgFigure />
    </>
  );
};

export const CustomCanvas = () => {
  return (
    <div>
      {/* <Canvas camera={{ position: [0, 0, 50] }}>
        <Suspense fallback={<Loading />}>
          <Scene />
        </Suspense>
      </Canvas> */}
      <h1>Text</h1>
    </div>
  );
};
