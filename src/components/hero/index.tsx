import Image from "next/image";
import { Avatar, Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import { format } from "date-fns";
import styled from "styled-components";

const Hero = () => {
    return (
        <Carousel
            responsive={{
                mobile: {
                    breakpoint: { max: 4000, min: 0 },
                    items: 1,
                },
            }}
        >
            {data.map((item) => (
                <HeroBox key={item.image}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <HeroTextBox />
                    <Box
                        width={{ xs: "100%", sm: "70%" }}
                        position={"relative"}
                        color={"white"}
                        zIndex={999}
                        sx={{
                            top: "50%",
                            transform: "translateY(-50%)",
                            paddingLeft: { xs: "10px", sm: "50px" },
                        }}
                    >
                        <Typography variant='h2'>{item.title}</Typography>
                        <Typography variant='h5'>{item.exerpt}</Typography>
                        <Box
                            sx={{
                                marginTop: "15px",
                                display: "flex",
                                gap: "15px",
                            }}
                        >
                            <Avatar
                                alt={item.author.name}
                                src={item.author.image}
                            />
                            <Box>
                                <Typography>{item.author.name}</Typography>
                                <Box>
                                    {format(new Date(), " dd, MMM,  yy")}{" "}
                                    &#x2022; 10 min read
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </HeroBox>
            ))}
        </Carousel>
    );
};

export default Hero;

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

const HeroBox = styled(Box)`
    position: relative;
    width: 100%;
    height: 70vh;
`;

const HeroTextBox = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`;
