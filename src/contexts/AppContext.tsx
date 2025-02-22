import { createContext, useState, ReactNode } from "react";
import { AppContextType, Page } from "../types";

const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * Checks if user has saved a preference for dark theme.
 * Defaults to user's system settings if no preference exists yet.
 * @returns User preference of darkMode theme.
 */
const initializeDarkMode = () => {
    if (localStorage.getItem("darkMode") === null) {
        const userPreference = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        localStorage.setItem("darkMode", userPreference.toString());
        return userPreference;
    }
    return localStorage.getItem("darkMode") === "true";
};

/**
 * Context provider for application wide settings.
 * @returns AppContext.Provider which provides access to isDarkMode, toggleDarkMode, pages
 */
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(initializeDarkMode);

    /**
     * Toggles between Light and Dark mode.
     * Saves user preference to localStorage.
     */
    const toggleDarkMode = () => {
        setIsDarkMode((prev) => {
            const invertedValue = !prev;
            localStorage.setItem("darkMode", invertedValue.toString());
            return invertedValue;
        });
    };

    const pages: Page[] = [
        { name: "Home", relativePath: "/" },
        { name: "Scheduling Algorithms", relativePath: "/scheduling" },
    ];

    return (
        <AppContext.Provider value={{ isDarkMode, toggleDarkMode, pages }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
