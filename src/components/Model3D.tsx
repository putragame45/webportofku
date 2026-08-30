"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


function Model() {
  const { scene } = useGLTF("/models/gojo_young.glb");

  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
      const targetY = state.pointer.x * 0.5;
      const targetX = -state.pointer.y * 0.2;
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.05);
      ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetX, 0.05);
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.15;
    
  });

  return (
    <group ref={ref}>
    <primitive object={scene} scale={2} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]}/>
    </group>
    );
}

export default function Model3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} />

      <Model />

      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
      />
    </Canvas>
  );
}