import FeaturedWorkCard from "../components/FeaturedWorkCard";
import Layout from "../components/Layout";
import useSWR from "swr";

export default function Work() {
  const fetcher = (url) => fetch(url).then((r) => r.json());

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

// export async function getStaticProps(context) {
//   console.log(context);

//   // const res = await fetch("/api/projects");
//   // const projects = res.json();

//   return {
//     props: {
//       // projects,
//     },
//   };
// }
