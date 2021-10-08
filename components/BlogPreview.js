import BlogCard from "./BlogCard";

export default function BlogPreview() {
  return (
    <section className="text-gray-700">
      <div className="container px-8 py-8 mx-auto">
        <div className="flex items-center flex-wrap text-xl m-1">
          <div className="text-indigo-500 inline-flex items-center">
            Recent Posts
          </div>
          <div className="text-gray-500 hover:underline ml-auto cursor-pointer">
            View all
          </div>
        </div>
        <div className="flex flex-wrap">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
}
