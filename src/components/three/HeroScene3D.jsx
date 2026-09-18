import { Canvas } from '@react-three/fiber'
import { FloatingIcosahedron } from './FloatingIcosahedron.jsx'

// Kept in its own module (default export) so it can be React.lazy-loaded —
// three.js + fiber are the heaviest dependencies here and this hero
// element is decorative, so there's no reason to block first paint on it.
export default function HeroScene3D({ eventSource, color, reducedMotion }) {
  return (
    <Canvas
      eventSource={eventSource}
      eventPrefix="client"
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.75]}
    >
      <FloatingIcosahedron color={color} reducedMotion={reducedMotion} />
    </Canvas>
  )
}
