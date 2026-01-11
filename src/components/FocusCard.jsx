import React from "react";

// status styles
const UI = {
  active: {
    title: "font-semibold text-slate-900 leading-snug",
    meta: "flex items-center gap-1.5 mt-2 text-sm text-slate-500",
    project:
      "gap-1 inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-2.5 text-xs font-medium border bg-indigo-50 text-indigo-700 border-indigo-200",
    card: "p-5 rounded-xl border-2 border-slate-200 shadow-md text-card-foreground",
  },
  skipped: {
    title: "font-semibold leading-snug line-through text-slate-400",
    meta: "flex items-center gap-1.5 mt-2 text-sm text-slate-500",
    project:
      "inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-2.5 text-xs font-medium border bg-indigo-50 text-indigo-700 border-indigo-200",
    card: "p-5 rounded-xl border-2 border-slate-100 shadow-md text-card-foreground opacity-50",
  },
  completed: {
    title: "font-semibold leading-snug line-through text-slate-500",
    meta: "flex items-center gap-1.5 mt-2 text-sm text-slate-500",
    project:
      "inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-2.5 text-xs font-medium border bg-indigo-50 text-indigo-700 border-indigo-200",
    card: "p-5 rounded-xl border-2 border-slate-100 shadow-md text-card-foreground opacity-75",
  },
};

function FocusCard({ title = "focus", time = 45, project, status = "active" }) {
  const ui = UI[status] ?? UI.active;
  return (
    <div className={ui.card}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* project label */}
          {project && (
            <div className={ui.project}>
              <i className="fi fi-rr-folder-open"></i>
              {project}
            </div>
          )}
          {/* title */}
          <h3 className={ui.title}>{title}</h3>
          {/* meta */}
          <div className={ui.meta}>
            <i className="fi fi-rr-clock"></i>
            <span>{time} min</span>
          </div>
        </div>
        {/* right side */}
        {/* active */}
        {status === "active" && (
          <div className="flex gap-2 items-center">
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-8 rounded-md px-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100">
              <i className="fi fi-rr-play-pause"></i>
            </button>
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-8 rounded-md px-3 text-xs bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
              <i className={"fi fi-rr-plus w-4 h-4 mr-2"}></i>
              Add Focus
            </button>
          </div>
        )}
        {/* skipped */}
        {status === "skipped" && (
          <div>
            <i className="fi fi-rr-play-pause"></i>
          </div>
        )}
        {/* completed */}
        {status === "completed" && (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-500">
            <i className="fi fi-br-check"></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default FocusCard;
