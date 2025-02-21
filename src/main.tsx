/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { StrictMode, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { lightTheme, darkTheme } from "./themes.tsx";
import App from "./App.tsx";

const Main: React.FC = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // If user has not used the app before, set theme based on sys. pref.
        if (localStorage.getItem("darkMode") === null) {
            const userPreference = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            localStorage.setItem("darkMode", userPreference.toString());
            return userPreference;
        }
        return localStorage.getItem("darkMode") === "true";
    });
    // Memorize the theme as it is expensive to compute
    const theme = useMemo(
        () => (darkMode ? darkTheme : lightTheme),
        [darkMode]
    );
    /**
     * Toggles between Light and Dark mode.
     */
    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            localStorage.setItem("darkMode", (!prev).toString());
            return !prev;
        });
    };

    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <Box>
                    <CssBaseline enableColorScheme={true} />
                    <App toggleDarkMode={toggleDarkMode} />
                </Box>
            </ThemeProvider>
        </StrictMode>
    );
};

createRoot(document.getElementById("root")!).render(<Main />);
