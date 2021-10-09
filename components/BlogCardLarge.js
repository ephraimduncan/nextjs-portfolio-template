import Link from "next/link";

export default function BlogCardLarge({ blogData }) {
  return (
    <div className="lg:col-span-2">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
        {blogData.date}
      </p>
      <div className="mb-3">
        <Link href={`/blog/${blogData.id}`}>
          <a
            aria-label="Article"
            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
              {blogData.title}
            </p>
          </a>
        </Link>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">
        {blogData.description}
      </p>
    </div>
  );
}
