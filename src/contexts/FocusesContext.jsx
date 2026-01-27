import { createContext, useContext, useEffect, useState } from "react";

const DEFAULT_FOCUSES = [
  { id: "1", title: "Focus1", time: 90, project: "Momentum", status: "active" },
  { id: "2", title: "Focus2", status: "skipped" },
  { id: "3", title: "Focus3", time: 30, actualTime: 27, status: "completed" },
];

const LS_KEY = "momentum_focuses_v1";
const LS_DAY_KEY = "momentum_current_day";
const LS_STREAK_KEY = "momentum_streak";

const FocusesContext = createContext(null);

export function FocusesProvider({ children }) {
  const [focuses, setFocuses] = useState(() => {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_FOCUSES;
  });
  const [streak, setStreak] = useState(() => {
    const raw = localStorage.getItem(LS_STREAK_KEY);
    return raw ? Number(raw) : 0;
  });

  // ukládání do LS když se změní focuses
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(focuses));
  }, [focuses]);

  useEffect(() => {
    localStorage.setItem(LS_STREAK_KEY, String(streak));
  }, [streak]);

  // day update
  function getTodayKey() {
    return new Date().toISOString().slice(0, 10);
  }

  useEffect(() => {
    const savedDay = localStorage.getItem(LS_DAY_KEY);
    const today = getTodayKey();

    if (savedDay != today) {
      handleDayChange();
      localStorage.setItem(LS_DAY_KEY, today);
    }
  }, []);

  function isDaySuccess(focuses) {
    return focuses.some((f) => f.status === "completed");
  }

  function handleDayChange() {
    const success = isDaySuccess(focuses);

    if (success) {
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    setFocuses([]);
  }

  // focus CRUD
  function addFocus({ title, project, time }) {
    setFocuses((prev) => {
      const activeNow = prev.filter((f) => f.status === "active").length;
      if (activeNow >= 3) {
        alert("Max 3 active focuses");
        return prev;
      }

      const newFocus = {
        id: crypto.randomUUID(),
        title,
        project: project === "No project" ? null : project,
        time,
        status: "active",
      };

      return [newFocus, ...prev];
    });
  }

  function skipFocus(id) {
    setFocuses((prev) =>
      prev.map((f) => (f.id === id ? { ...f, status: "skipped" } : f))
    );
  }

  function completeFocus(id, actualTime) {
    setFocuses((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, status: "completed", actualTime } : f
      )
    );
  }

  return (
    <FocusesContext.Provider
      value={{ focuses, addFocus, skipFocus, completeFocus, streak }}
    >
      {children}
    </FocusesContext.Provider>
  );
}

export function useFocuses() {
  const ctx = useContext(FocusesContext);
  if (!ctx) throw new Error("useFocuses must be used inside FocusesProvider");
  return ctx;
}
