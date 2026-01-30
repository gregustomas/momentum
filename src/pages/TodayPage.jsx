import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import FocusCard from "../components/FocusCard";
import AddFocusModal from "../components/AddFocusModal";
import { useFocuses } from "../contexts/FocusesContext";
import Button from "../components/Button";

function TodayPage() {
  const { focuses, addFocus, skipFocus, streak } = useFocuses();

  // focuses
  const activeFocuses = focuses.filter((f) => f.status === "active");
  const activeCount = activeFocuses.length;
  const doneFocuses = focuses.filter(
    (f) => f.status === "skipped" || f.status === "completed",
  );

  const totalMinutes = Math.floor(countTotalMinutes());

  // date
  const date = new Date();
  const weekday = date.toLocaleDateString("cs-CZ", {
    weekday: "long",
  });
  const day = date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  function countTotalMinutes() {
    return doneFocuses.reduce((sum, f) => {
      return sum + (f.actualTime || 0);
    }, 0);
  }

  return (
    <div>
      {/* header */}
      <div className="flex flex-col-reverse items-start gap-4 justify-between mb-8 md:flex-row items-center">
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
            value={doneFocuses.length}
            total={3}
            color={"indigo"}
            label={"Completed"}
            icon={"fi-rr-bullseye"}
          />
          <StatCard
            value={streak}
            color={"amber"}
            label={"Day streak"}
            icon={"fi-rr-fire-flame-curved"}
          />
          <StatCard
            value={totalMinutes}
            color={"emerald"}
            label={"min today"}
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
        <Button
          onClick={() => setIsModalOpen(true)}
          icon={<i className={"fi fi-rr-plus w-4 h-4 mr-2"}></i>}
          children="Add Focus"
        />
      </div>
      {/* focuses list */}
      {focuses.length > 0 ? (
        <div>
          <div className="space-y-4">
            {activeFocuses.length > 0 &&
              activeFocuses.map((f) => (
                <FocusCard
                  key={f.id}
                  id={f.id}
                  title={f.title}
                  time={f.time}
                  project={f.project}
                  status={f.status}
                  handleSkip={() => skipFocus(f.id)}
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
                    id={f.id}
                    title={f.title}
                    time={f.time}
                    actualTime={f.actualTime}
                    project={f.project}
                    status={f.status}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center py-16">
          <div className="w-20 h-20 text-3xl mx-auto mb-6 rounded-2xl bg-slate-100 flex items-center justify-center">
            <i className="fi fi-rr-sparkles lucide lucide-sparkles text-slate-300"></i>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              What will you focus on today?
            </h3>
            <p className="text-slate-500 mb-6 max-w-sm mx-auto">
              Add up to 3 focus tasks. Each should be achievable in 30-90
              minutes.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              icon={<i className="fi fi-rr-plus"></i>}
              children="Add Your First Focus"
              variant="indigo"
            />
          </div>
        </div>
      )}

      <AddFocusModal
        activeCount={activeCount}
        onClose={() => setIsModalOpen(false)}
        open={isModalOpen}
        onSubmit={(data) => {
          addFocus(data);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}

export default TodayPage;
