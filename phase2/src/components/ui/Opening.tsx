import React from "react";

type Props = {
  onStart: () => void;
};

const Opening = ({ onStart }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-3xl text-center">
      <h1 className="text-4xl font-bold mb-8">
        Yuta Nishizaki
        <br />
        Portfolio
      </h1>
      <div className="flex items-center justify-center">
        <svg
          className="w-8 h-8 text-white animate-[pulse_700ms_ease-in-out_infinite]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ imageRendering: "pixelated" }}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="12" y="11" width="4" height="2" fill="currentColor" />
          <rect x="12" y="9" width="2" height="6" fill="currentColor" />
          <rect x="10" y="7" width="2" height="10" fill="currentColor" />
          <rect x="8" y="5" width="2" height="14" fill="currentColor" />
          <rect x="6" y="3" width="2" height="18" fill="currentColor" />
        </svg>
        <button
          className="bg-white text-black px-6 py-2 rounded-md shadow hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
          onClick={onStart}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Opening;
