import React, { useEffect } from "react";

type Props = {
  progress: number;
  onFinished: () => void;
};

// progress: 0〜100 の数値を受け取る
const Loading = ({ progress, onFinished }: Props) => {
  useEffect(() => {
    if (progress === 100) {
      onFinished();
    }
  }, [progress, onFinished]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        Now Loading... {progress}%
      </div>
      {/* ローディングバー */}
      <div className="w-full h-1 bg-transparent">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

export default Loading;
