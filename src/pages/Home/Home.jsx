import React from "react";
// import backgroundvideo from "../../assets/backgroundvideo.mp4";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import Model from "../../components/Model";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="head">
        {/* <video autoPlay loop muted>
          <source src={backgroundvideo} type="video/mp4" />
        </video> */}

        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 80 }}
          style={{ width: "300px", height: "400px", margin: "20px auto 0 auto" }}
        >
          {/* <color attach="background" args={['#101010']} /> */}
          <PresentationControls
            speed={2}
            global
            zoom={1}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={null}>
              <Model scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
}
