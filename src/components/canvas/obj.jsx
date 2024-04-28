import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile,light }) => {
  const computer = useGLTF("./triwizard_cup/scene.gltf");
  const ref = useRef();

  // This function will be called every frame to rotate the cup
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });

  return (
    <mesh ref={ref}>
      <ambientLight intensity={light?0.7:0} /> {/* Adjust ambient light intensity */}
      <spotLight
        position={[10, 10, 10]} // Adjust spot light position
        angle={0.3}
        penumbra={0.5}
        intensity={light?600:0} // Increase intensity
        castShadow
        shadowMapSizeWidth={2048} // Corrected property name
        shadowMapSizeHeight={2048}
      />
      <pointLight position={[10, -10, -10]} intensity={light?500:0} /> {/* Adjusted for fill light */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.035 : 0.038} // Scale down the model as needed
        position={[0, -1, 0]} // Adjust to ensure it's at the bottom
      />
    </mesh>
  );
};

export const ComputersCanvas = ({light}) => {
  const [isMobile, setIsMobile] = useState(false);

  // ... rest of the useEffect code

  return (
    <div style={{ height: '70vh', position: 'relative',marginTop:'-20vh',marginRight:'5vh' }}> {/* Fill the viewport height */}
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 50 }} // Adjust for a closer view
      >
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Computers isMobile={isMobile} light={light} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
