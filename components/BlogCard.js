export default function BlogCard({ title, date, description }) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
        {date}
      </p>
      <div className="mb-3">
        <a
          href="/"
          aria-label="Article"
          className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
            {title}{" "}
          </p>
        </a>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">
        {description}
      </p>
    </div>
  );
}
