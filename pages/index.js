import Head from "next/head";
import BlogPreview from "../components/BlogPreview";
import FeaturedWorksPreview from "../components/FeaturedWorksPreview";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <BlogPreview />
      <FeaturedWorksPreview id="work" />
      <Footer />
    </div>
  );
}
