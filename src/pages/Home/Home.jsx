import React from "react";
import backgroundvideo from '../../assets/backgroundvideo.mp4'
import "./Home.css";

import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";


function Model(props) {
  const { scene } = useGLTF('/cd.glb');
  return <primitive object={scene} scale={0.01} {...props} />;
}

export default function Home() {
 

  return (
    <div>
      <div className="header">
        <video autoPlay loop muted>
                <source src={backgroundvideo} type='video/mp4' />
            </video>
      </div>


      <Canvas dpr={[1,2]} shadows camera={{fov: 45 }} style={{"position":"absolute"}}>
            {/* <color attach="background" args={['#101010']} /> */}
            <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4 ]}>
              <Stage environment={null}>
                <Model scale={0.01} />
              </Stage>
            </PresentationControls>
      </Canvas>
    </div>
  );
}
