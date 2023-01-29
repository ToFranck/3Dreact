import React from "react";
import backgroundvideo from "../../assets/backgroundvideo.mp4";
import "./Home.css";

import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import Model from "../../components/Model";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="main">
        <video autoPlay loop muted>
          <source src={backgroundvideo} type="video/mp4" />
        </video>

        <div className="head">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nesciunt ab quibusdam deserunt molestias, labore laboriosam odio inventore consequuntur a eligendi non error repellendus minus est voluptatibus delectus ratione qui?</p>
        </div>


        <div className="content">
          <div className="left">left</div>
          <div className="right">
            right
            <Canvas
              dpr={[1, 2]}
              camera={{ fov: 45 }}
              style={{ width: "300px", height: "500px" }}
            >
              {/* <color attach="background" args={['#101010']} /> */}
              <PresentationControls
                speed={2}
                // global zoom={1}
                polar={[-0.1, Math.PI / 4]}
              >
                <Stage environment={null}>
                  <Model scale={0.01} />
                </Stage>
              </PresentationControls>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
