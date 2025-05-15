import React, { useRef, useMemo, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { useFrame } from '@react-three/fiber';
import { group } from 'console';

const SvgFigure = () => {
  const groupRef = useRef<THREE.Group | null>(null);
  const svgData = useLoader(SVGLoader, '/public/resume.svg');

  useFrame(({ clock }) => {
    const group = groupRef.current;
    if (group) {
      group.rotation.y = clock.elapsedTime;
    }
  });

  const meshes = useMemo(() => {
    const globalBox = new THREE.Box2(
      new THREE.Vector2(+Infinity, +Infinity),
      new THREE.Vector2(-Infinity, -Infinity)
    );

    svgData.paths.forEach((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        const geom = new THREE.ShapeGeometry(shape);
        geom.computeBoundingBox();
        if (geom.boundingBox) {
          globalBox.min.x = Math.min(globalBox.min.x, geom.boundingBox.min.x);
          globalBox.min.y = Math.min(globalBox.min.y, geom.boundingBox.min.y);
          globalBox.max.x = Math.max(globalBox.max.x, geom.boundingBox.max.x);
          globalBox.max.y = Math.max(globalBox.max.y, geom.boundingBox.max.y);
        }
        geom.dispose();
      });
    });

    const globalCenter = new THREE.Vector2();
    globalBox.getCenter(globalCenter);
    const globalSize = new THREE.Vector2();
    globalBox.getSize(globalSize);

    const desiredSize = 25; // or any other dimension
    const maxDim = Math.max(globalSize.x, globalSize.y);
    const scale = maxDim > 0 ? desiredSize / maxDim : 1;

    const elements: React.JSX.Element[] = [];
    svgData.paths.forEach((path, pathIndex) => {
      const shapes = SVGLoader.createShapes(path);

      // Basic material
      const material = new THREE.MeshBasicMaterial({
        color: path.color,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      shapes.forEach((shape, shapeIndex) => {
        const extrudeSettings = {
          steps: 12,
          depth: 0,
          bevelEnabled: true,
          bevelThickness: 1,
          bevelSize: 1,
          bevelOffset: 0,
          bevelSegments: 1,
        };

        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        geometry.computeBoundingBox();
        geometry.translate(-globalCenter.x, -globalCenter.y, 0);
        geometry.scale(scale, scale, 1);
        geometry.rotateX(Math.PI);

        elements.push(<mesh geometry={geometry} material={material} />);
      });
    });

    return elements;
  }, [svgData]);

  return <group ref={groupRef}>{meshes}</group>;
};

export default SvgFigure;
