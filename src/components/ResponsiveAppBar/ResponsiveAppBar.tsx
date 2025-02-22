import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import DesktopContent from "./parts/DesktopContent.tsx";
import MobileContent from "./parts/MobileContent.tsx";

const ResponsiveAppBar: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar disableGutters>
                    <DesktopContent />
                    <MobileContent />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
