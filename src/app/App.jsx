import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { FocusesProvider } from "../contexts/FocusesContext";

function App() {
  return (
    <FocusesProvider>
      <RouterProvider router={router} />
    </FocusesProvider>
  );
}

export default App;
