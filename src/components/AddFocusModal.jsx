import React, { useState } from "react";

const modalContentClass =
  "bg-slate-50 fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg sm:max-w-md";

const labelStyle = "text-sm font-medium";

function AddFocusModal({ activeCount = 0, onClose, open, onSubmit }) {
  const [dropOpen, setDropOpen] = useState(false);
  const [title, setTitle] = useState("");
  const isTitleValid = title.trim().length > 0;
  const [project, setProject] = useState(null);
  const [minutes, setMinutes] = useState(45);
  const MAX_SLOTS = 3;
  const usedSlots = activeCount;
  const remainingSlots = Math.max(0, MAX_SLOTS - usedSlots);

  function handleSubmit(e) {
    e.preventDefault();
    if (!isTitleValid) return;

    onSubmit?.({
      title: title.trim(),
      project: project ?? "No project",
      time: minutes,
    });

    // reset UI po submitu (MVP)
    setTitle("");
    setProject(null);
    setMinutes(45);
    setDropOpen(false);
    onClose?.();
  }

  return (
    <div
      className={`
        fixed inset-0 z-50 bg-black/80
        transition-opacity duration-200 ease-in
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      onClick={onClose}
    >
      <div
        className={`
          ${modalContentClass}
          transition-all duration-200 ease-in
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* title */}
        <div className="flex gap-2 items-center text-xl font-semibold tracking-tight">
          <i className="fi fi-rr-bullseye text-indigo-500"></i>
          <h2>Add Today's Focus</h2>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          {/* focus title */}
          <div className="space-y-2">
            <label className={labelStyle}>What will you focus on?</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="e.g., Build the landing page hero section"
              className="flex mt-1 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors md:text-sm h-11 border-slate-200"
            />
          </div>
          {/* project */}
          <div className="space-y-2">
            <label className={labelStyle}>Link to project (optional)</label>
            {/* select */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setDropOpen(!dropOpen);
              }}
              className="flex w-full rounded-md border items-center justify-between border-slate-200 bg-transparent px-3 text-sm shadow-sm transition-colors h-11 focus:outline-none focus:ring-2 focus:ring-slate-900"
            >
              <span>{project ? project : "No project"}</span>
              <span>
                <i className="fi fi-rr-angle-small-down"></i>
              </span>
            </button>
            {/* dropdown */}
            {dropOpen && (
              <div className="border space-y-1 p-2 rounded-md border-slate-200 border-input shadow-md ${}">
                {["No project", "project1", "project2", "project3"].map(
                  (option) => {
                    const isSelected = option === project;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setProject(option);
                          setDropOpen(false);
                        }}
                        className={`
        flex w-full items-center justify-between px-2 py-1.5 text-sm rounded
        transition-colors
        ${isSelected ? "bg-slate-200 text-slate-900" : "hover:bg-slate-100"}
      `}
                      >
                        <span>{option}</span>
                        <span className="text-sm">
                          <i className="fi fi-br-check"></i>
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            )}
          </div>
          {/* focus time */}
          <div>
            <div className="flex items-center justify-between">
              <label className={labelStyle}>Estimated time</label>
              <span className="flex gap-2 text-sm text-indigo-500 font-semibold items-center">
                <i className="fi fi-rr-clock"></i>
                {minutes} min
              </span>
            </div>
            {/* slider */}
            <div>
              <input
                type="range"
                min={15}
                max={120}
                step={5}
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full py-2 accent-slate-700"
              />
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>15 min</span>
              <span>2 hours</span>
            </div>
          </div>
          {/* slots */}
          <div className="flex items-center py-3 px-4 rounded-xl bg-slate-100 text-xs gap-2 text-slate-500">
            <div className="flex gap-1">
              {Array.from({ length: MAX_SLOTS }).map((_, i) => {
                const filled = i < remainingSlots;
                return (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      filled ? "bg-indigo-400" : "bg-slate-200"
                    }`}
                  ></div>
                );
              })}
            </div>
            <span>
              {remainingSlots} slot{remainingSlots === 1 ? "" : "s"} remaining
              today
            </span>
          </div>
          {/* submit focus */}
          <button
            type="submit"
            disabled={!isTitleValid}
            className={`
    w-full px-4 py-2 rounded-md text-white font-semibold text-sm h-11
    transition-colors
    ${
      isTitleValid
        ? "bg-indigo-500 hover:bg-indigo-600 cursor-pointer"
        : "bg-slate-400 cursor-not-allowed"
    }
  `}
          >
            Add Focus
          </button>
        </form>
        {/* close btn */}
        <button onClick={onClose} className="absolute top-4 right-4">
          <i className="fi fi-br-cross"></i>
        </button>
      </div>
    </div>
  );
}

export default AddFocusModal;
