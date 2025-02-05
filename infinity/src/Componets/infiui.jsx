import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Scene = () => {
  const modelRef = useRef(null);
  const { scene } = useGLTF("/infinity_loop.glb");

  // Set up material properties when the model loads
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

  // Add continuous rotation animation
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.3; // Slower rotation
    }
  });

  if (!scene) return null;

  return (
    <>
      <PerspectiveCamera
        fov={50}   // Zoom out slightly for better framing
        near={0.1}
        far={1000}
        position={[0, 1, 10]} // Move camera back
        makeDefault
      />
      
      <Environment preset="city" background={false} />
      
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ambientLight intensity={0.5} />  {/* Brighter ambient light */}

      <primitive
        ref={modelRef}
        object={scene}
        scale={[0.01, 0.01, 0.01]}  // Decrease size
        position={[0, 0, 0]}
      />
    </>
  );
};

export default Scene;
