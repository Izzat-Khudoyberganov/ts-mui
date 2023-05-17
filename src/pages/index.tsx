import { Content, Hero, Sidebar } from "@/components";
import Layout from "@/layout/layout";
import { Box } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Box sx={{ display: "flex", gap: "20px", padding: "20px" }}>
                <Sidebar />
                <Content />
            </Box>
        </Layout>
    );
}
