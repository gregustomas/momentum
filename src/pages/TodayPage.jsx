import React from "react";
import StatCard from "../components/StatCard";
import FocusCard from "../components/FocusCard";

function TodayPage() {
  // return <div className="rounded-2xl bg-white p-6 shadow-sm">Today page</div>;
  const date = new Date();
  const weekday = date.toLocaleDateString("cs-CZ", {
    weekday: "long",
  });
  const day = date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="block">
          <p className="text-sm font-medium text-slate-500 mb-1 capitalize">
            {weekday}
          </p>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight capitalize">
            {day}
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <StatCard
            value={1}
            total={3}
            color={"indigo"}
            label={"Completed"}
            icon={"fi-rr-bullseye"}
          />
          <StatCard
            value={1}
            color={"amber"}
            label={"Day streak"}
            icon={"fi-rr-fire-flame-curved"}
          />
          <StatCard
            value={1}
            color={"emerald"}
            label={"Completed"}
            icon={"fi-rr-clock"}
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <i class="fi fi-rr-sparkles text-indigo-500"></i>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Today's Focus
            </h2>
            <p className="text-sm text-slate-500">
              Max 3 tasks that move you forward
            </p>
          </div>
        </div>
        <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
          <i className={"fi fi-rr-plus lucide lucide-plus w-4 h-4 mr-2"}></i>
          Add Focus
        </button>
      </div>
      <div className="space-y-4">
        <FocusCard status="active" />
      </div>
      <div className="mt-8 pt-6 border-t border-slate-200">
        <h3 className="text-sm font-medium text-slate-500 mb-4">
          Completed & Skipped
        </h3>
        <div className="space-y-3">
          <FocusCard status="skipped" />
          <FocusCard status="completed" />
        </div>
      </div>
    </div>
  );
}

export default TodayPage;
