import useTextureLoader from "@/hooks/useTextureLoader";
import React from "react";
import tilesTexture from "@/assets/sprites/tiles.png";

const TileMap = () => {
  const textureUrl = tilesTexture.src;
  const { isLoading, texture, error } = useTextureLoader(textureUrl);

  if (isLoading) {
    return null;
  }
  if (error) {
    console.error("Failed to load texture:", error);
    return null;
  }
  if (!texture) {
    return null;
  }

  return (
    <mesh position={[1, 1, 0]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default TileMap;
