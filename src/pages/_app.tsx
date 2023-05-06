import Head from "next/head";
import type { AppProps } from "next/app";
import createEmotionCache from "@/helpers/createEmotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material";
import theme from "@/helpers/theme";
import CssBaseline from "@mui/material/CssBaseline";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name='viewport'
                    content='initial-scale=1, width=device-width'
                />
                <title>Material UI</title>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}
