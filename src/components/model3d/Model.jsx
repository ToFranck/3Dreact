import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {


        const { scene } = useGLTF('/vinyl.glb');
        const ref = useRef (null);
        useFrame (() => {
            if (!ref.current) {
                return;
            }
            // ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.01;
            // ref.current.rotation.z += 0.01;
            
          
            
        });

        return <primitive object={scene} scale={0.01} {...props} ref={ref}  />;
   
      
}
