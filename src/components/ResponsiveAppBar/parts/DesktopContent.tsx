import * as React from "react";
import { Box } from "@mui/material";
import AppBarLogo from "./AppBarLogo.tsx";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import DesktopNavLink from "./DesktopNavLink";
import { ResponsiveAppBarProps } from "../../../types.tsx";

const DesktopContent: React.FC<ResponsiveAppBarProps> = ({
    pages,
    toggleDarkMode,
}) => {
    const isDarkModeEnabled = localStorage.getItem("darkMode") === "true";

    return (
        <>
            <AppBarLogo
                withText={true}
                sx={{ display: { xs: "none", md: "flex" } }}
            />
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                }}
            >
                {pages.map((page) => (
                    <DesktopNavLink
                        key={page.name}
                        text={page.name}
                        href={page.relativePath}
                    />
                ))}
            </Box>
            <FormGroup sx={{ display: { xs: "none", md: "flex" } }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isDarkModeEnabled}
                            color="secondary"
                            onChange={() => toggleDarkMode()}
                        />
                    }
                    label="Dark mode"
                />
            </FormGroup>
        </>
    );
};

export default DesktopContent;
