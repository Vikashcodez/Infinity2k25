import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, useGLTF, Bounds } from "@react-three/drei";

const Scene = ({ progress }) => {
  const cameraRef = useRef(null);
  const modelRef = useRef(null); // Ref for rotation
  const { scene } = useGLTF("/logo1.glb");

  // Ensure the model is centered
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(0, -1, 0);
      modelRef.current.scale.set(1.2, 1.2, 1.2); // Adjust scale
    }
  }, []);

  // Auto-rotate model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      {/* Auto-frame model to fit the screen */}
      <Bounds fit clip observe margin={1.2}>
        <PerspectiveCamera 
          ref={cameraRef}
          fov={75}
          near={0.1}
          far={1000}
          makeDefault
          position={[0, 1, 6]} // Move back to avoid clipping
        />
      </Bounds>

      <Environment preset="city" />

      {/* Adjusted Model */}
      <primitive ref={modelRef} object={scene} />

      {/* Lights */}
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={2} />
    </>
  );
};

export default Scene;
