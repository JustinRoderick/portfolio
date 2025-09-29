'use client';

import { Canvas } from '@react-three/fiber';
import SvgFigure from './figure';
import { Suspense } from 'react';

interface SceneProps {
  svgPath: string;
  onReady?: () => void;
}

interface CustomCanvasProps {
  svgPath: string;
  onReady?: () => void;
}

const Scene: React.FC<SceneProps> = ({ svgPath, onReady }) => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <SvgFigure svgPath={svgPath} onLoaded={onReady} />
    </>
  );
};

export const CustomCanvas: React.FC<CustomCanvasProps> = ({ svgPath, onReady }) => {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
      <Suspense fallback={null}>
        <Scene svgPath={svgPath} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
};
