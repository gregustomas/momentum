import React, { useState } from "react";
import StatCard from "../components/StatCard";
import FocusCard from "../components/FocusCard";
import AddFocusModal from "../components/AddFocusModal";

const focuses = [
  { id: "1", title: "Focus1", time: 90, project: "Momentum", status: "active" },
  { id: "2", title: "Focus2", status: "skipped" },
  { id: "3", title: "Focus3", time: 30, actualTime: 27, status: "completed" },
];

function TodayPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeFocuses = focuses.filter((f) => f.status === "active");
  const activeCount = activeFocuses.length;
  const doneFocuses = focuses.filter(
    (f) => f.status === "skipped" || f.status === "completed"
  );
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
      {/* header */}
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
      {/* add focus */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <i className="fi fi-rr-sparkles text-indigo-500"></i>
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
        <button
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
        >
          <i className={"fi fi-rr-plus w-4 h-4 mr-2"}></i>
          Add Focus
        </button>
      </div>
      {/* focuses list */}
      <div className="space-y-4">
        {activeFocuses.length > 0 &&
          activeFocuses.map((f) => (
            <FocusCard
              key={f.id}
              title={f.title}
              time={f.time}
              project={f.project}
              status={f.status}
            />
          ))}
      </div>
      <div className="mt-8 pt-6 border-t border-slate-200">
        <h3 className="text-sm font-medium text-slate-500 mb-4">
          Completed & Skipped
        </h3>
        <div className="space-y-3">
          {doneFocuses.length > 0 &&
            doneFocuses.map((f) => (
              <FocusCard
                key={f.id}
                title={f.title}
                time={f.time}
                actualTime={f.actualTime}
                project={f.project}
                status={f.status}
              />
            ))}
        </div>
      </div>
      <AddFocusModal
        activeCount={activeCount}
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
      />
    </div>
  );
}

export default TodayPage;
