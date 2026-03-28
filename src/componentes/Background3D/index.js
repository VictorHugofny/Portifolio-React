import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Stars } from '@react-three/drei';

function WireframeGeometry() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2.5, 2]} position={[0, 0, -2]}>
      <meshStandardMaterial color="#6366f1" wireframe={true} transparent opacity={0.5} />
    </Icosahedron>
  );
}

export default function Background3D() {
  return (
    <div className="background-3d-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#6366f1" />
        
        <WireframeGeometry />
        
        <Stars radius={100} depth={50} count={3000} factor={6} saturation={1} fade speed={1.5} />
      </Canvas>
    </div>
  );
}
