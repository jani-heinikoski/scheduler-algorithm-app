import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";

import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import SchedulingPage from "./pages/SchedulingPage/SchedulingPage.tsx";
import { Page } from "./types.tsx";

const pages: Array<Page> = [
    { name: "Home", href: "/" },
    { name: "Scheduling Algorithms", href: "/scheduling" },
];

interface AppProps {
    toggleDarkMode: () => void;
}

const App: React.FC<AppProps> = ({ toggleDarkMode }) => {
    return (
        <>
            <BrowserRouter>
                <ResponsiveAppBar
                    pages={pages}
                    toggleDarkMode={toggleDarkMode}
                />
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/scheduling" element={<SchedulingPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
