import { Typography } from "@mui/material";
import { NavLink } from "react-router";
import { useTheme } from "@mui/material";

interface DesktopNavLinkProps {
    text: string;
    href: string;
}

const DesktopNavLink: React.FC<DesktopNavLinkProps> = ({ text, href }) => {
    const theme = useTheme();

    return (
        <NavLink to={href} style={{ color: "inherit", textDecoration: "none" }}>
            {({ isActive }) => (
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mx: 4,
                        display: { xs: "none", md: "flex" },
                        fontFamily: "monospace",
                        fontWeight: 500,
                        letterSpacing: ".1rem",
                        color: isActive
                            ? theme.palette.secondary.main
                            : "inherit",
                    }}
                >
                    {text}
                </Typography>
            )}
        </NavLink>
    );
};

export default DesktopNavLink;
