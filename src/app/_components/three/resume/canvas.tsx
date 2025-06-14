'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SvgFigure from './figure';

interface SceneProps {
  svgPath: string;
}

interface CustomCanvasProps {
  svgPath: string;
}

const Scene: React.FC<SceneProps> = ({ svgPath }) => {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <SvgFigure svgPath={svgPath} />
    </>
  );
};

export const CustomCanvas: React.FC<CustomCanvasProps> = ({ svgPath }) => {
  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
      <Scene svgPath={svgPath} />
    </Canvas>
  );
};
