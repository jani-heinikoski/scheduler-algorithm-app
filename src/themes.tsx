import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#FFC107",
        },
    },
});

export const darkTheme = createTheme({
    cssVariables: true,
    palette: {
        mode: "dark",
        primary: {
            main: "#3f50b5",
        },
        secondary: {
            main: "#f44336",
        },
    },
});
