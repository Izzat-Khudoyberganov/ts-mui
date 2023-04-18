import { Footer, Navbar } from "@/components";
import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
