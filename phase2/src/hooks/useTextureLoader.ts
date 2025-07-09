import { useEffect, useState } from "react";
import * as THREE from "three";

const useTextureLoader = (url: string) => {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (texture) => {
        setTexture(texture);
        setIsLoading(false);
      },
      (err: unknown) => {
        setError(err as Error);
        setIsLoading(false);
      }
    );
  }, [url]);

  return { isLoading, texture, error };
};

export default useTextureLoader;
