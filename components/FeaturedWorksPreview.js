import FeaturedWorkCard from "./FeaturedWorkCard";

export default function FeaturedWorksPreview() {
  return (
    <div className="container px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="text-indigo-500 text-xl m-1 my-2 font-medium">
        Featured Works
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <FeaturedWorkCard />
        <FeaturedWorkCard />
        <FeaturedWorkCard />
      </div>
    </div>
  );
}
