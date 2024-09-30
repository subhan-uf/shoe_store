import { Suspense, useEffect, useRef } from 'react';
import { useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Stage, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { fetchDataFromApi } from '@/utils/api';

extend({ OrbitControls });

export default function Video({}) {
  const { camera, gl } = useThree();
  const model = useGLTF("shoe18.glb");
  const orbitRef = useRef();
  const modelRef = useRef();

  useEffect(() => {
    if (orbitRef.current) {
      camera.position.set(200, 200, 200);
      const controls = orbitRef.current;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
    }
  }, [orbitRef.current]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <>
      <orbitControls ref={orbitRef} args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Stage>
        <primitive ref={modelRef} object={model.scene} />
      </Stage>
    </>
  );
};
