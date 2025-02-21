import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { ResponsiveAppBarProps } from "../../types.tsx";
import DesktopContent from "./parts/DesktopContent.tsx";
import MobileContent from "./parts/MobileContent.tsx";

const ResponsiveAppBar: React.FC<ResponsiveAppBarProps> = ({
    pages,
    toggleDarkMode,
}) => {
    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar disableGutters>
                    <DesktopContent
                        pages={pages}
                        toggleDarkMode={toggleDarkMode}
                    />
                    <MobileContent
                        pages={pages}
                        toggleDarkMode={toggleDarkMode}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
