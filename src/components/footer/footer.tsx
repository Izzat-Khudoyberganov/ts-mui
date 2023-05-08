import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "primary.dark",
                padding: "20px",
                color: "white",
            }}
        >
            <Typography>
                {format(new Date(), "yyyy")} All rights reserved
            </Typography>
            <Box sx={{ display: "flex", gap: "15px" }}>
                <TelegramIcon sx={{ cursor: "pointer" }} />
                <InstagramIcon sx={{ cursor: "pointer" }} />
                <YouTubeIcon sx={{ cursor: "pointer" }} />
            </Box>
        </Box>
    );
};

export default Footer;
