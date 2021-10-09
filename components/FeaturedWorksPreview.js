import useSWR from "swr";
import { fetcher } from "../lib/utils";
import FeaturedWorkCard from "./FeaturedWorkCard";

export default function FeaturedWorksPreview({ projects }) {
  const { data } = useSWR("/api/projects", fetcher);

  return (
    <div
      id="work"
      className="container px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"
    >
      <div className="font-sans text-2xl font-extrabold leading-none tracking-tight m-2">
        Featured Projects
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {data &&
          data
            .slice(0, 3)
            .map(({ category, title, description }) => (
              <FeaturedWorkCard
                category={category}
                title={title}
                description={description}
              />
            ))}
      </div>
    </div>
  );
}
