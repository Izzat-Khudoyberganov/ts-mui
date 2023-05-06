import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Footer, Navbar } from "@/components";

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Navbar />
            <Box minHeight={"90vh"}>{children}</Box>
            <Footer />
        </>
    );
};

export default Layout;
