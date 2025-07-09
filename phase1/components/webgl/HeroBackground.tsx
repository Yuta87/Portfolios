"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

// 型拡張
declare global {
  namespace JSX {
    interface IntrinsicElements {
      rippleMaterial: any;
    }
  }
}

// window参照を初期値で使わない
const RippleMaterial = shaderMaterial(
  {
    u_time: 0,
    u_mouse: [0, 0],
    u_resolution: [1, 1], // 仮の値
  },
  vertexShader,
  fragmentShader
);
extend({ RippleMaterial });

function RipplePlane() {
  const ref = useRef<any>();
  useFrame(({ clock, mouse, size }) => {
    if (ref.current) {
      ref.current.u_time = clock.getElapsedTime();
      ref.current.u_mouse = [
        (mouse.x + 1) * 0.5 * size.width,
        (1 - (mouse.y + 1) * 0.5) * size.height,
      ];
      ref.current.u_resolution = [size.width, size.height];
    }
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.u_resolution = [window.innerWidth, window.innerHeight];
    }
  }, []);

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <rippleMaterial ref={ref} />
    </mesh>
  );
}

export default function HeroBackground() {
  return (
    <Canvas
      gl={{ alpha: true }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // 背景なのでクリックを透過したい場合
        zIndex: 0,
      }}
    >
      <RipplePlane />
    </Canvas>
  );
}
