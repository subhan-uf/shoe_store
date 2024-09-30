// Inside components/ShoeModelWithCanvas.jsx (create this new file)

import React from 'react';
import { Canvas } from '@react-three/fiber';
import ShoeModel from './ShoeModel'; // Adjust the import path according to your project structure


export default function ShoeModelWithCanvas({productss, onInteract}) {
  
  
  // console.log("MODEL WITH CANVAS")
  // console.log(productss)

  // console.log(" SECOND MODEL WITH CANVAS")
  // console.log(productss)
  return (
    
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      onTouchStart={onInteract} onTouchMove={onInteract}
    >
      <ShoeModel productss={productss}/>
    </Canvas>
   
  );
}
