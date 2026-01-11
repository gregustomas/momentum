import React from "react";

function Focus({ name = "focus", time = 45, project }) {
  return (
    <div className="p-5 rounded-xl border-2 border-slate-200 shadow-md text-card-foreground">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          {project && (
            <div className="gap-1 inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-2.5 text-xs font-medium border bg-indigo-50 text-indigo-700 border-indigo-200">
              <i class="fi fi-rr-folder-open"></i>
              {project}
            </div>
          )}
          <h3 className="font-semibold text-slate-900 leading-snug">{name}</h3>
          <div className="flex items-center gap-1.5 mt-2 text-sm text-slate-500">
            <i class="fi fi-rr-clock"></i>
            <span>{time} min</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-8 rounded-md px-3 text-slate-400 hover:text-slate-600 hover:bg-slate-100">
            <i class="fi fi-rr-play-pause"></i>
          </button>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-8 rounded-md px-3 text-xs bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
            <i className={"fi fi-rr-plus lucide lucide-plus w-4 h-4 mr-2"}></i>
            Add Focus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Focus;
