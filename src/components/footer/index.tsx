import { Box, Typography } from "@mui/material";
import { format } from "date-fns";
import styled from "styled-components";

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
                padding: "20px",
                color: "white",
                backgroundColor: "#141414",
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

const FooterBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    color: white;
    background-color: #141414;
`;
