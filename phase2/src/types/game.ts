/**
 * ゲーム関連の型定義
 *
 * このファイルには以下が含まれる:
 * - プレイヤーの状態型
 * - ゲームの進行状態型
 * - NPCの型定義
 * - 対話システムの型定義
 * - インベントリの型定義
 */

// プレイヤーの位置座標
export type PlayerPosition = [number, number];

// プレイヤーの向き
export type PlayerDirection = "up" | "down" | "left" | "right";

// プレイヤーの状態
export interface Player {
  position: PlayerPosition;
  direction: PlayerDirection;
  isMoving: boolean;
}

// ゲームの進行状態
export type GamePhase = "playing" | "dialog" | "menu" | "loading";

// NPCの基本情報
export interface NPC {
  id: string;
  position: PlayerPosition;
  name: string;
  spriteIndex: number;
  dialogData: DialogData[];
}

// 対話データ
export interface DialogData {
  id: string;
  messages: string[];
  conditions?: DialogCondition[];
}

// 対話の条件
export interface DialogCondition {
  type: "inventory" | "quest" | "flag";
  value: any;
}

// 対話状態
export interface DialogState {
  isOpen: boolean;
  currentNPC: NPC | null;
  messages: string[];
  currentMessageIndex: number;
}

// インベントリアイテム
export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  iconIndex: number;
  quantity: number;
}

// ゲーム全体の状態
export interface GameState {
  // プレイヤー情報
  player: Player;

  // ゲーム状態
  gamePhase: GamePhase;

  // NPC情報
  npcs: NPC[];

  // インベントリ
  inventory: InventoryItem[];

  // 対話状態
  dialog: DialogState;

  // アクション
  setPlayerPosition: (position: PlayerPosition) => void;
  setPlayerDirection: (direction: PlayerDirection) => void;
  setGamePhase: (phase: GamePhase) => void;
}
