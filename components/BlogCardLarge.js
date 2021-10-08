export default function BlogCardLarge() {
  return (
    <div className="lg:col-span-2">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
        20 Nov 2020
      </p>
      <div className="mb-3">
        <a
          href="/"
          aria-label="Article"
          className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
            What it means when a man falls from outer space
          </p>
        </a>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">
        Call it magical realism, call it realistic fantasy—call it
        whatever you want, but Arimah's playfully subversive style is
        wholly her own.
      </p>
    </div>
  );
}
