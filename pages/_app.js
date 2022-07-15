import Navbar from "@/organisms/navbar/";
import ThemeProvider from "theme/ThemeProvider";
import "../styles/globals.css";
import { AppProvider } from "context/ContextProvider";
import Head from "next/head";
import Layout from "components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Head>
        <title>Techie Blog</title>
        <meta name="description" content="Tech blog" />
        <meta
          name="keywords"
          content="Programming, technology, code, web development"
        />
      </Head>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppProvider>
  );
}

export default MyApp;
