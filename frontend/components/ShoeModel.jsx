import { Suspense, useEffect, useRef } from 'react';
import { useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {  Stage, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { fetchDataFromApi } from '@/utils/api';

extend({ OrbitControls });

export default function ShoeModel({productss}){
    // console.log("printing products ", productss)
    const {camera, gl}= useThree()
    let modelvar=''
    if(productss && modelvar=='' ){
        
        const modelURL=productss
        modelvar=modelURL
        
        
    }
    
   
   

   
    const model = useGLTF(productss);  
    
    
    

    const orbitRef= useRef()
    const modelRef= useRef()

    useEffect(() => {
        if (orbitRef.current) {
            camera.position.set(200,200,200)
            const controls = orbitRef.current;
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
        }
    }, [orbitRef.current])

    return (
    <>
        <orbitControls ref={orbitRef} args={[camera, gl.domElement]} />

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <Stage>
            <primitive ref={modelRef}
            object={model.scene}
            />
        </Stage>
    </>
)};








// import React, { useState } from 'react';
// import ShoeModelWithCanvas from './ShoeModelWithCanvas'; // This component has the <Canvas>
// import { Canvas } from '@react-three/fiber';

// function ParentComponent({ productss }) {
//     const [lightIntensity, setLightIntensity] = useState(4.5);
//     const [lightColor, setLightColor] = useState('#ffffff');

//     return (
//         <div>
//             <Canvas>
//                 {/* Pass light settings as props */}
//                 <ShoeModelWithCanvas
//                     productss={productss}
//                     lightIntensity={lightIntensity}
//                     lightColor={lightColor}
//                 />
//             </Canvas>

//             {/* UI controls outside of Canvas */}
//             <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
//                 <label>
//                     Light Intensity:
//                     <input
//                         type="range"
//                         min="0"
//                         max="10"
//                         step="0.1"
//                         value={lightIntensity}
//                         onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
//                     />
//                 </label>
//                 <label>
//                     Light Color:
//                     <input
//                         type="color"
//                         value={lightColor}
//                         onChange={(e) => setLightColor(e.target.value)}
//                     />
//                 </label>
//             </div>
//         </div>
//     );
// }

// export default ParentComponent;

