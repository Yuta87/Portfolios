"use client";
import { create } from "zustand";
import { GameState, PlayerPosition } from "@/types/game";

/**
 * ゲームの状態管理を行うZustandストア
 *
 * 機能:
 * - プレイヤーの位置情報管理
 * - ゲームの進行状態管理
 * - NPCとの対話状態管理
 * - インベントリ管理
 * - セーブ/ロード機能
 */
export const useGameStore = create<GameState>((set, get) => ({
  // プレイヤー情報
  player: {
    position: [1, 1],
    direction: "down",
    isMoving: false,
  },

  // ゲーム状態
  gamePhase: "playing", // "playing" | "dialog" | "menu" | "loading"

  // NPC情報
  npcs: [],

  // インベントリ 
  inventory: [],

  // 対話状態
  dialog: {
    isOpen: false,
    currentNPC: null,
    messages: [],
    currentMessageIndex: 
  },

  // アクション
  setPlayerPosition: (position: PlayerPosition) =>
    set((state) => ({
      player: { ...state.player, position },
    })),

  setPlayerDirection: (direction: "up" | "down" | "left" | "right") =>
    set((state) => ({
      player: { ...state.player, direction },
    })),

  setGamePhase: (phase: GameState["gamePhase"]) => set({ gamePhase: phase }),

  // TODO: NPC管理機能
  // TODO: インベントリ操作機能
  // TODO: 対話システム機能
  // TODO: セーブ/ロード機能
}));

/**
 * ゲーム状態を使用するためのカスタムフック
 */
export function useGameState() {
  return useGameStore();
}
