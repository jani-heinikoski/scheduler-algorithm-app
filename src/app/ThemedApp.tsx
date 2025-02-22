import React, { useMemo } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import useAppContext from "../hooks/useAppContext.ts";
import { lightTheme, darkTheme } from "../themes.ts";
import App from "./App.tsx";

const ThemedApp: React.FC = () => {
    const { isDarkMode } = useAppContext();

    // Memoize the theme as it is expensive to compute
    const theme = useMemo(
        () => (isDarkMode ? darkTheme : lightTheme),
        [isDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <CssBaseline enableColorScheme={true} />
                <App />
            </Box>
        </ThemeProvider>
    );
};

export default ThemedApp;
