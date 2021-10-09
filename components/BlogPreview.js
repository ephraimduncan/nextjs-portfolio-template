import Link from "next/link";
import BlogCard from "./BlogCard";
import BlogCardLarge from "./BlogCardLarge";

export default function BlogPreview({ mostRecentBlog, recentBlog }) {
  return (
    <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="flex items-center flex-wrap text-xl my-3">
        <div className="font-sans text-2xl font-extrabold leading-none tracking-tight m-2">
          Recent Posts
        </div>
        <Link href="/blog">
          <a className="font-sans text-2xl font-extrabold leading-none text-gray-500 hover:underline ml-auto cursor-pointer tracking-tight m-2">
            View all
          </a>
        </Link>
      </div>
      <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
        <BlogCardLarge blogData={mostRecentBlog} />
        <div className="flex flex-col space-y-8 lg:col-span-3">
          {recentBlog.map((blogData) => {
            return <BlogCard blogData={blogData} />;
          })}
        </div>
      </div>
    </div>
  );
}
