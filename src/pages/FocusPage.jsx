import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CircularTimer from "../components/CircularTimer";

const btnStyle =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm px-8 w-14 h-14 rounded-full border-slate-700 bg-transparent text-slate-400 hover:text-white hover:bg-white/10";

const mainBtnStyle =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-8 w-20 h-20 rounded-full text-white shadow-lg transition-all bg-indigo-500 hover:bg-indigo-600 shadow-indigo-500/30";

const mainBtnStyleActive =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 px-8 w-20 h-20 rounded-full text-white shadow-lg transition-all bg-amber-500 hover:bg-amber-600 shadow-amber-500/30";

function FocusPage({ title = "Focus", time }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="px-6 py-12 flex items-center justify-center w-full h-full inset-0 fixed bg-indigo-900 p-6 shadow-sm">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 max-w-xl text-center mx-auto leading-tight">
          {title}
        </h1>
        <CircularTimer timeText="00:00" label="Focus Time" progress={0.0} />
        <div className="flex justify-center items-center gap-4 mt-12">
          <button className={btnStyle}>
            <i class="fi fi-rr-rotate-right"></i>
          </button>
          <button
            onClick={() => setIsActive(!isActive)}
            className={isActive ? mainBtnStyleActive : mainBtnStyle}
          >
            {isActive ? (
              <i class="fi fi-sr-pause"></i>
            ) : (
              <i class="fi fi-sr-play"></i>
            )}
          </button>
          <button className={btnStyle}>
            <i class="fi fi-br-check"></i>
          </button>
        </div>
        <p className="text-sm text-slate-500 mt-8">Time elapsed: 02:40</p>
      </div>

      <button className="absolute top-4 right-4 text-slate-400">
        <i className="fi fi-br-cross"></i>
      </button>
    </div>
  );
}

export default FocusPage;
