import { BrowserRouter, Routes, Route } from "react-router";

import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppBar.tsx";
import HomePage from "../pages/HomePage/HomePage.tsx";
import SchedulingPage from "../pages/SchedulingPage/SchedulingPage.tsx";

const App: React.FC = () => {
    return (
        <BrowserRouter basename="scheduler-algorithm-app">
            <ResponsiveAppBar />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/scheduling" element={<SchedulingPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
