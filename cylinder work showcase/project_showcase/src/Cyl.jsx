import React, { useRef } from 'react';
import {  useTexture } from '@react-three/drei'; 
import * as THREE from 'three'; 
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
  const tex = useTexture("src/assets/image.png");
  const cyl = useRef(null);  // Initialize the reference

  // Rotate the cylinder over time
  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta * 0.2;  //change the 0.5 value to increase and decrease the speed of the rotation
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
    <mesh ref={cyl} >
      
      <cylinderGeometry args={[1, 1, , 60, 60, true]} />
      <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
    </mesh>
    </group>
  );
}

export default Cyl;
