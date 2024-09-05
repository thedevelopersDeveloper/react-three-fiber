import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
    <mesh>
      <cylinderGeometry args={[1,1,1,30,30,true]}/>
      <meshStandardMaterial side={THREE.DoubleSide} />
    </mesh>
  </Canvas>
  )
}

export default App
