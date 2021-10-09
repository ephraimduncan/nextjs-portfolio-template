import BlogPreview from "../components/BlogPreview";
import FeaturedWorksPreview from "../components/FeaturedWorksPreview";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ posts }) {
  const mostRecentBlog = posts[0];
  const recentBlog = posts.slice(1, 3);

  return (
    <div>
      <Layout>
        <Hero />
        <BlogPreview
          mostRecentBlog={mostRecentBlog}
          recentBlog={recentBlog}
        />
        <FeaturedWorksPreview id="work" />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
}
