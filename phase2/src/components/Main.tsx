"use client";
import { useState } from "react";
import { useImagePreload } from "@/hooks/useImagePreload";
import Loading from "@/components/ui/Loading";
import Opening from "@/components/ui/Opening";
import GameCanvas from "./game/GameCanvas";

// 仮の画像ファイル名配列（public配下 or assets/sprites配下を想定）
const SPRITE_IMAGES = [
  "@/assets/sprites/sprite1.png",
  "@/assets/sprites/sprite2.png",
  "@/assets/sprites/sprite3.png",
];

export default function Main() {
  const [phase, setPhase] = useState<"loading" | "opening" | "main">("loading");
  const progress = useImagePreload(SPRITE_IMAGES);

  if (phase === "loading") {
    return (
      <Loading progress={progress} onFinished={() => setPhase("opening")} />
    );
  }

  if (phase === "opening") {
    return <Opening onStart={() => setPhase("main")} />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-3xl">
      <GameCanvas />
    </div>
  );
}
