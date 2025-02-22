/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemedApp from "./ThemedApp.tsx";
import { AppContextProvider } from "./contexts/AppContext.tsx";

const Main: React.FC = () => {
    return (
        <StrictMode>
            <AppContextProvider>
                <ThemedApp />
            </AppContextProvider>
        </StrictMode>
    );
};

createRoot(document.getElementById("root")!).render(<Main />);
