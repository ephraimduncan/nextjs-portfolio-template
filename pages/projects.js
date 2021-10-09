import FeaturedWorkCard from "../components/FeaturedWorkCard";
import Layout from "../components/Layout";
import useSWR from "swr";
import { fetcher } from "../lib/utils";

export default function Work() {
  const { data } = useSWR("/api/projects", fetcher);
  return (
    <Layout>
      <div className="max-w-screen-sm px-4 py-12 mx-auto">
        <div className="font-sans text-center text-4xl font-extrabold leading-none tracking-tight m-3">
          Featured Projects
        </div>
        {data &&
          data.map(({ category, title, description }) => (
            <FeaturedWorkCard
              category={category}
              title={title}
              description={description}
            />
          ))}
        ;
      </div>
    </Layout>
  );
}
