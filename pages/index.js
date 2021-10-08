import Head from "next/head";
import BlogPreview from "../components/BlogPreview";
import FeaturedWorksPreview from "../components/FeaturedWorksPreview";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <BlogPreview />
        <FeaturedWorksPreview id="work" />
      </Layout>
    </div>
  );
}
