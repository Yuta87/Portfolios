/**
 * キャラクター関連の型定義
 *
 * このファイルには以下が含まれる:
 * - プレイヤーキャラクターの詳細情報
 * - NPCの詳細情報
 * - キャラクターのアニメーション状態
 * - スプライト情報
 */

// キャラクターの基本情報
export interface Character {
  id: string;
  name: string;
  spriteSheet: string;
  spriteIndex: number;
  animationState: AnimationState;
}

// アニメーション状態
export interface AnimationState {
  currentFrame: number;
  totalFrames: number;
  frameDuration: number;
  isPlaying: boolean;
  direction: "up" | "down" | "left" | "right";
}

// スプライト情報
export interface SpriteInfo {
  width: number;
  height: number;
  frameWidth: number;
  frameHeight: number;
  animations: {
    idle: number[];
    walk: number[];
    talk: number[];
  };
}

// TODO: プレイヤーキャラクターの詳細型定義
// TODO: NPCの詳細型定義
// TODO: キャラクターの能力値型定義
