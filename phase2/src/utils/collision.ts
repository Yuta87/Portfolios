import { mapData } from "@/data/maps";
import { tileProperties } from "@/data/tileProperties";

/**
 * 指定座標が歩行可能かどうか判定
 */
export function isWalkable(x: number, y: number): boolean {
  const tileIndex = mapData[y]?.[x];
  return tileProperties[tileIndex]?.walkable ?? true;
}
