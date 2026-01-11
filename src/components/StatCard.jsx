import React from "react";

const colorMap = {
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-500",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-500",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-500",
  },
};

function StatCard({
  value = 0,
  total,
  label = "label",
  color = "red",
  icon = "fi-rr-heart",
}) {
  const colors = colorMap[color] ?? colorMap.rose;

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-xl ${colors.bg} ${colors.text}`}
      >
        <i className={`fi ${icon} text-lg`}></i>
      </div>
      <div>
        <div className="text-2xl font-bold text-slate-900 tracking-tight">
          {value}
          {typeof total == "number" && (
            <span className="text-slate-300">/</span>
          )}
          {total}
        </div>
        <div className="text-xs text-slate-500 font-medium">{label}</div>
      </div>
    </div>
  );
}

export default StatCard;
