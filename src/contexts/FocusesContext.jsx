import { createContext, useContext, useEffect, useState } from "react";

const DEFAULT_FOCUSES = [
  { id: "1", title: "Focus1", time: 90, project: "Momentum", status: "active" },
  { id: "2", title: "Focus2", status: "skipped" },
  { id: "3", title: "Focus3", time: 30, actualTime: 27, status: "completed" },
];

const LS_KEY = "momentum_focuses_v1";

const FocusesContext = createContext(null);

export function FocusesProvider({ children }) {
  const [focuses, setFocuses] = useState(() => {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : DEFAULT_FOCUSES;
  });

  // ukládání do LS když se změní focuses
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(focuses));
  }, [focuses]);

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
      value={{ focuses, addFocus, skipFocus, completeFocus }}
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
