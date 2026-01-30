import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import TodayPage from "../pages/TodayPage";
import ProjectsPage from "../pages/ProjectsPage";
import HistoryPage from "../pages/HistoryPage";
import FocusPage from "../pages/FocusPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <TodayPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "history", element: <HistoryPage /> },
      { path: "focus/:focusId", element: <FocusPage /> },
    ],
  },
]);
