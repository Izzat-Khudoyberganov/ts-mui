import { navItems } from "@/config/constants";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import { format } from "date-fns";
import styled from "styled-components";

const Sidebar = () => {
    return (
        <Box width={"30%"}>
            <Box position={"sticky"} top={"100px"}>
                <SidebarWrapper>
                    <Typography variant='h6'>Latest Blog</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "20px",
                        }}
                    >
                        {data.map((item) => (
                            <Box key={item.title} marginTop={"20px"}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "20px",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={100}
                                        height={100}
                                        style={{
                                            borderRadius: "8px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                        }}
                                    >
                                        <Typography variant='body1'>
                                            {item.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: "5px",
                                            }}
                                        >
                                            <Avatar
                                                alt={item.author.name}
                                                src={item.author.image}
                                            />
                                            <Box>
                                                <Typography variant='body2'>
                                                    {item.author.name}
                                                </Typography>
                                                <Box sx={{ opacity: "0.6" }}>
                                                    {format(
                                                        new Date(),
                                                        " dd, MMM,  yy"
                                                    )}{" "}
                                                    &#x2022; 10 min read
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider sx={{ marginTop: "20px" }} />
                            </Box>
                        ))}
                    </Box>
                </SidebarWrapper>
                <SidebarWrapper sx={{ marginTop: "40px" }}>
                    <Typography variant='h6'>Category</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "20px",
                        }}
                    >
                        {navItems.map((nav) => (
                            <Fragment key={nav.route}>
                                <Button
                                    fullWidth
                                    sx={{
                                        justifyContent: "flex-start",
                                        height: "50px",
                                    }}
                                >
                                    {nav.label}
                                </Button>
                                <Divider />
                            </Fragment>
                        ))}
                    </Box>
                </SidebarWrapper>
            </Box>
        </Box>
    );
};

export default Sidebar;

const SidebarWrapper = styled(Box)`
    padding: 20px;
    border: 1px solid gray;
    border-radius: 8px;
`;

const data = [
    {
        image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
        title: "Technical SEO with Hygraph",
        exerpt: "Get started with your SEO implementation when using a Headless CMS",
        author: {
            name: "Samar Badriddinov",
            image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
        },
    },
    {
        image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
        title: "Union Types and Sortable Relations with Hygraph",
        exerpt: "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
        author: {
            name: "Samar Badriddinov",
            image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
        },
    },
];
