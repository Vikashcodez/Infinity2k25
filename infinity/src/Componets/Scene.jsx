import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Scene = ({ progress }) => {
  const modelRef = useRef(null);
  const { scene } = useGLTF("/logo1.glb");

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: child.material.color,
            metalness: 0.8,
            roughness: 0.2,
            envMapIntensity: 1
          });
        }
      });
    }
  }, [scene]);

  const positions = [
    { camera: [3.5, 1.8, 18], rotation: 0 },
    { camera: [3.7, 0.8, 16], rotation: Math.PI },
    { camera: [0, 2.0, 17], rotation: Math.PI * 2 }
  ];

  useEffect(() => {
    if (!scene) return;

    const totalSegments = positions.length - 1;
    const segmentProgress = 1 / totalSegments;
    const currentSegment = Math.floor(progress / segmentProgress);

    if (currentSegment < totalSegments) {
      const start = positions[currentSegment];
      const end = positions[currentSegment + 1];
      const segmentPercent = (progress % segmentProgress) / segmentProgress;

      // Interpolate rotation
      const rotation = start.rotation + (end.rotation - start.rotation) * segmentPercent;
      
      if (modelRef.current) {
        modelRef.current.rotation.y = rotation;
      }
    }
  }, [progress, scene]);

  if (!scene) return null;

  return (
    <>
      <PerspectiveCamera
        fov={45}
        near={0.1}
        far={1000}
        position={[0, 0.5, 16]}
        makeDefault
      />
      
      <Environment preset="city" background={false} />
      
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
      />
      <ambientLight intensity={0.2} />

      <primitive
        ref={modelRef}
        object={scene}
        scale={[1.4, 1.4, 1.4]}
        position={[0, -1, 0]}
      />
    </>
  );
};

export default Scene;