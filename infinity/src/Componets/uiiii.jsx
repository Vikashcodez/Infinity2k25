
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/infinity_loop.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        position={[0, 1.204, -1.949]}
        rotation={[-Math.PI, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/infinity_loop.glb')