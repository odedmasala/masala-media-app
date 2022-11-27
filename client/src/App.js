import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "pages/homePage";
import LoginPage from "pages/loginPage";
import ProfilePage from "pages/profilePage";
import { useMemo } from "react";
import { selectMode, selectToken } from "features/authSlice";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

import React from "react";
import "./app.css";
const App = () => {
  const mode = useSelector(selectMode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector(selectToken));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={isAuth ? <Navigate to="/home" /> : <LoginPage />}
            />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />{" "}
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
