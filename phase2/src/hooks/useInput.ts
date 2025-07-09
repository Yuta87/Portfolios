"use client";
import { useEffect, useState } from "react";

type InputDirection = "up" | "down" | "left" | "right" | null;

interface InputState {
  direction: InputDirection;
  isPressed: boolean;
}

/**
 * プレイヤーの入力処理を管理するカスタムフック
 *
 * 機能:
 * - キーボード入力の検知（WASD, 矢印キー）
 * - モバイル用タッチ/スワイプ入力の検知
 * - 入力状態の管理と当たり判定との連携
 * - 連続入力の制御（移動速度調整）
 *
 * @returns 現在の入力状態と移動方向
 */
export function useInput() {
  const [inputState, setInputState] = useState<InputState>({
    direction: null,
    isPressed: false,
  });

  // TODO: キーボード入力の検知処理
  // TODO: モバイル用タッチ入力の検知処理
  // TODO: 当たり判定を考慮した移動処理
  // TODO: 入力の連続性制御

  return {
    direction: inputState.direction,
    isPressed: inputState.isPressed,
  };
}
