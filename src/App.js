import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[0, 0, 2]} />
      <mesh position={[1, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh position={[-1, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>

      <mesh position={[-1, 2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <mesh position={[1, 2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="aquamarine" />
      </mesh>
    </Canvas>
  )
}
