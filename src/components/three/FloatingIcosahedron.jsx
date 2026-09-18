import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FloatingIcosahedron({ color = '#9D6FFF', reducedMotion = false }) {
  const groupRef = useRef(null)

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) return

    if (!reducedMotion) {
      group.rotation.y += delta * 0.15
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, state.pointer.y * 0.2, 0.04)
      group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, -state.pointer.x * 0.1, 0.04)
    }
  })

  return (
    <group ref={groupRef} rotation={[0.4, 0.6, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.45} />
      </mesh>
      <mesh scale={0.985}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color={color} transparent opacity={0.035} />
      </mesh>
    </group>
  )
}
