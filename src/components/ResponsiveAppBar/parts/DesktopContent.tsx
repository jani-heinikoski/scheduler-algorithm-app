import * as React from "react";
import { Box } from "@mui/material";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import AppBarLogo from "./AppBarLogo.tsx";
import DesktopNavLink from "./DesktopNavLink";

import useAppContext from "../../../hooks/useAppContext.ts";

const DesktopContent: React.FC = () => {
    const { isDarkMode, toggleDarkMode, pages } = useAppContext();

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
                            checked={isDarkMode}
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
