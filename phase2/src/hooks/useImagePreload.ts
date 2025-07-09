"use client";
import { useEffect, useState } from "react";

/**
 * 画像プリロード用カスタムフック
 * @param imageUrls 画像ファイルのURL配列
 * @returns progress: 0〜100（整数）
 */
export function useImagePreload(imageUrls: string[]): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setProgress(100);
      return;
    }
    let loaded = 0;
    imageUrls.forEach((url) => {
      const img = new window.Image();
      img.onload = img.onerror = () => {
        loaded += 1;
        setProgress(Math.round((loaded / imageUrls.length) * 100));
      };
      img.src = url;
    });
  }, [imageUrls]);

  return progress;
}
