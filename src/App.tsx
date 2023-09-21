import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { router } from "./router";
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuthStateChanged } from "./utils/hooks/firebaseAuth";
import theme from "./theme";

function App() {
  initializeApp(firebaseConfig);
  useAuthStateChanged();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      <ToastContainer hideProgressBar />
    </ThemeProvider>
  );
}

export default App;
