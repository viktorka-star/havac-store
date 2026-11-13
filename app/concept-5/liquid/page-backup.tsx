
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

const particles = Array.from({ length: 32 }, (_, i) => {
  const angle = (i / 32) * Math.PI * 2;
  const y = Math.sin(angle * 2) * 1.25;
  const x = Math.cos(angle) * 1.15;

  return {
    start: [
      Math.cos(angle) * (3 + (i % 3) * 0.4),
      Math.sin(angle) * (2.5 + (i % 4) * 0.3),
      (i % 5) * 0.25 - 0.5,
    ] as [number, number, number],
    target: [x, y, 0.35] as [number, number, number],
    delay: (i % 8) * 0.12,
    size: 0.07 + (i % 4) * 0.025,
  };
});

function LiquidParticle({
  start,
  target,
  delay,
  size,
}: {
  start: [number, number, number];
  target: [number, number, number];
  delay: number;
  size: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const time = clock.elapsedTime;
    const progress = THREE.MathUtils.clamp((time - 0.5 - delay) / 3, 0, 1);
    const eased = progress * progress * (3 - 2 * progress);

    const current = new THREE.Vector3(...start);
    const destination = new THREE.Vector3(...target);

    ref.current.position.lerpVectors(current, destination, eased);
    ref.current.scale.setScalar(
      size * (1 - eased * 0.45) * (0.5 + progress * 0.5)
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshPhysicalMaterial
        color="#a52d48"
        roughness={0.12}
        metalness={0.25}
        clearcoat={1}
        clearcoatRoughness={0.05}
      />
    </mesh>
  );
}

function PerfumeBottle() {
  const bottle = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!bottle.current) return;

    const time = clock.elapsedTime;
    const progress = THREE.MathUtils.clamp((time - 1.4) / 3, 0, 1);
    const eased = progress * progress * (3 - 2 * progress);

    bottle.current.scale.setScalar(eased);
    bottle.current.rotation.y = Math.sin(time * 0.45) * 0.12;
    bottle.current.position.y = Math.sin(time * 0.7) * 0.07;
  });

  return (
    <group ref={bottle} scale={0} position={[0, 0, 0]}>
      {/* Glass bottle */}
      <RoundedBox args={[1.55, 2.45, 0.48]} radius={0.2} smoothness={5}>
        <meshPhysicalMaterial
          color="#f3dce0"
          roughness={0.08}
          metalness={0.1}
          transmission={0.35}
          thickness={0.8}
          transparent
          opacity={0.65}
          clearcoat={1}
        />
      </RoundedBox>

      {/* Perfume liquid */}
      <RoundedBox
        args={[1.32, 1.65, 0.35]}
        radius={0.13}
        smoothness={5}
        position={[0, -0.3, 0.04]}
      >
        <meshPhysicalMaterial
          color="#74172e"
          roughness={0.12}
          metalness={0.2}
          clearcoat={1}
        />
      </RoundedBox>

      {/* Neck */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.29, 0.29, 0.38, 48]} />
        <meshStandardMaterial color="#c9a46b" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 1.7, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.38, 48]} />
        <meshStandardMaterial color="#d8bd91" metalness={0.8} roughness={0.17} />
      </mesh>

      {/* Label */}
      <mesh position={[0, -0.05, 0.255]}>
        <planeGeometry args={[1.05, 0.55]} />
        <meshStandardMaterial color="#f0e5d7" roughness={0.7} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#10090d"]} />
      <fog attach="fog" args={["#10090d", 7, 16]} />

      <ambientLight intensity={1.1} />
      <pointLight position={[-4, 3, 5]} intensity={90} color="#f3b4c2" />
      <pointLight position={[4, 1, -3]} intensity={100} color="#a82b48" />
      <spotLight
        position={[0, 6, 5]}
        intensity={100}
        angle={0.55}
        penumbra={1}
        color="#fff0e1"
      />

      {particles.map((particle, i) => (
        <LiquidParticle key={i} {...particle} />
      ))}

      <PerfumeBottle />
    </>
  );
}

export default function LiquidTransformation() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#10090d] text-[#f5e9df]">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 7], fov: 38 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: false }}
        >
          <Scene />
        </Canvas>
      </div>

      <header className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-8 py-7 md:px-16">
        <span className="text-xl font-light tracking-[0.45em]">HAVAC</span>
        <span className="text-[10px] tracking-[0.35em] text-white/50">
          THE ART OF FRAGRANCE
        </span>
        <span className="text-xs tracking-[0.2em]">01 / 03</span>
      </header>

      <section className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-between px-6 pb-12 pt-36 text-center">
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.55em] text-[#d8b9a5]">
            A new dimension of fragrance
          </p>
          <h1 className="font-serif text-5xl font-light tracking-wide md:text-7xl">
            Born from
            <br />
            <span className="italic text-[#c68a91]">the essence.</span>
          </h1>
        </div>

        <div className="mb-8">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/55">
            HAVAC — Lost in Time
          </p>
          <p className="mt-3 text-xs tracking-[0.2em] text-white/35">
            SCROLL TO DISCOVER
          </p>
          <div className="mx-auto mt-5 h-12 w-px bg-gradient-to-b from-[#c68a91] to-transparent" />
        </div>
      </section>
    </main>
  );
}
