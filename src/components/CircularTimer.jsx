import React from "react";

export default function CircularTimer({
  timeText = "36:32",
  label = "Focus time",
  progress = 0.35, // 0..1 (0 = prázdné, 1 = plné)
  size = 320,
  strokeWidth = 10,
}) {
  const r = (size - strokeWidth) / 2;
  const c = 2 * Math.PI * r;

  // progress 0..1 -> offset c..0
  const dashOffset = c * (1 - Math.min(Math.max(progress, 0), 1));

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg
        className="-rotate-90"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={strokeWidth}
        />

        {/* Progress */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6D5EF7" />
            <stop offset="100%" stopColor="#7A67FF" />
          </linearGradient>
        </defs>

        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={dashOffset}
          className="transition-[stroke-dashoffset] duration-300 ease-linear"
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-white font-bold tracking-tight text-6xl">
          {timeText}
        </div>
        <div className="mt-3 text-slate-300 text-sm">{label}</div>
      </div>
    </div>
  );
}
