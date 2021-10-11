import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/no-italics.css"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
