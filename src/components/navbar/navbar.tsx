import * as React from "react";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
    Button,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { navItems } from "@/config/constants";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AdjustIcon from "@mui/icons-material/Adjust";

interface Props {
    window?: () => Window;
}
const Navbar = ({ window }: Props) => {
    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    const container =
        window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingX: "20px",
                }}
            >
                <Box sx={{ my: 2, display: "flex", alignItems: "center" }}>
                    <AdjustIcon />
                    <Typography variant='h6' sx={{ my: 2 }}>
                        Izzat
                    </Typography>
                </Box>
                <CloseIcon />
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.route} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box height={"10vh"} sx={{ display: "flex" }}>
            <AppBar component='nav'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            alignItems: "center",
                            gap: "5px",
                            flexGrow: 1,
                            display: { xs: "none", sm: "flex" },
                        }}
                    >
                        <AdjustIcon />
                        <Typography variant='h6' component='div' sx={{}}>
                            MUI
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((el) => (
                            <Button key={el.route} sx={{ color: "#fff" }}>
                                {el.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component='nav'>
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: "100%",
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Navbar;
