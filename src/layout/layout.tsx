import { Footer, Navbar } from "@/components";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

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
