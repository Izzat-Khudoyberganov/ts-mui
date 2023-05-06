import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Footer, Navbar } from "@/components";

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div>
            <Navbar />
            <Box>{children}</Box>
            <Footer />
        </div>
    );
};

export default Layout;
