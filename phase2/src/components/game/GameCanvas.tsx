import React from "react";
import { Canvas } from "@react-three/fiber";
import TileMap from "./components/TileMap";
import NPC from "./components/NPC";
import PLayer from "./components/PLayer";
import { mapData as mapDataSource } from "@/data/maps";

const GameCanvas = () => {
  const mapData: number[][] = mapDataSource;
  return (
    <Canvas orthographic camera={{ position: [0, 0, 10], zoom: 16 }}>
      <TileMap />
      <PLayer position={playerPos} texture={tileTexture} />
      <NPC position={[5, 3]} tileIndex={12} texture={tileTexture} />
    </Canvas>
  );
};

export default GameCanvas;
