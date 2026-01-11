import React from "react";
import StatCard from "../components/StatCard";

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
          <p className="text-sm font-medium text-slate-500 mb-1">{weekday}</p>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            {day}
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <StatCard value={1} total={3} color={"blue"} label={"Completed"} icon={"fi-rr-bullseye"}/>
          <StatCard value={1} color={"amber"} label={"Day streak"} icon={"fi-rr-fire-flame-curved"}/>
          <StatCard value={1} color={"emerald"} label={"Completed"} icon={"fi-rr-clock"}/>
        </div>
      </div>
    </div>
  );
}

export default TodayPage;
