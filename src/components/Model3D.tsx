"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/gojo_young.glb");

  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y =
        window.scrollY * 0.002;
    }
  });

  return (
    <group ref={ref}>
    <primitive object={scene} scale={2} />
    </group>
    );
}

export default function Model3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} />

      <Model />

      <OrbitControls />
    </Canvas>
  );
}