import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { router } from "./router";

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
