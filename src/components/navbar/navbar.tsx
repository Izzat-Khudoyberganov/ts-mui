import * as React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
    window?: () => Window;
}

const Navbar = ({ window }: Props) => {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    return (
        <Box height={"10vh"} sx={{ display: "flex" }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                        <Typography
                            variant='h6'
                            component='div'
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", sm: "block" },
                            }}
                        >
                            MUI
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
