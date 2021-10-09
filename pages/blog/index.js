import BlogCard from "../../components/BlogCard";
import FeaturedWorkCard from "../../components/FeaturedWorkCard";
import Layout from "../../components/Layout";
import { getSortedPostsData } from "../../lib/posts";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="max-w-screen-sm px-4 py-12 mx-auto">
        <div className="font-sans text-center text-4xl font-extrabold leading-none tracking-tight m-3">
          Blog
        </div>

        <div>
          {posts.map(({ category, date, title, description }) => {
            return (
              <FeaturedWorkCard
                category={category}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </Layout>
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
