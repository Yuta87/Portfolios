import React from "react";
import { Texture } from "three";

const PLayer = ({
  position,
  texture,
}: {
  position: [number, number];
  texture: Texture;
}) => {
  return (
    <>
      <mesh position={[position[0], position[1], 0]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default PLayer;
