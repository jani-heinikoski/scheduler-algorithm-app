import * as React from "react";
import { NavLink } from "react-router";

import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material";

import AppBarLogo from "./AppBarLogo";

import useAppContext from "../../../hooks/useAppContext.ts";

const MobileContent: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const { pages } = useAppContext();
    const theme = useTheme();

    const handleOpenMobileNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseMobileNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                }}
            >
                <IconButton
                    size="large"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenMobileNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseMobileNavMenu}
                    sx={{ display: { xs: "block", md: "none" } }}
                >
                    {pages.map((page) => (
                        <NavLink
                            key={page.name}
                            to={page.relativePath}
                            style={{ color: "inherit", textDecoration: "none" }}
                        >
                            {({ isActive }) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={handleCloseMobileNavMenu}
                                >
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            color: isActive
                                                ? theme.palette.secondary.main
                                                : "inherit",
                                        }}
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            )}
                        </NavLink>
                    ))}
                </Menu>
            </Box>
            <AppBarLogo sx={{ display: { xs: "flex", md: "none" } }} />
        </>
    );
};

export default MobileContent;
