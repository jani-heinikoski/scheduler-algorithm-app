import { Typography } from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { SxProps, Theme } from "@mui/material";

interface AppBarLogoProps {
    sx?: SxProps<Theme>;
    withText?: boolean;
}

const AppBarLogo: React.FC<AppBarLogoProps> = ({ sx, withText = false }) => {
    return (
        <>
            <ScheduleIcon sx={{ display: "flex", mr: 1, ...sx }} />
            {withText && (
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        display: "flex",
                        mr: 2,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                        ...sx,
                    }}
                >
                    SCHEDU
                </Typography>
            )}
        </>
    );
};

export default AppBarLogo;
