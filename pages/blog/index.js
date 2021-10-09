import Layout from "../../components/Layout";

export default function Blog() {
  return (
    <Layout>
      <div className="max-w-screen-sm px-4 py-12 mx-auto">
        <div className="font-sans text-center text-4xl font-extrabold leading-none tracking-tight m-3">
          Blog
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths(ctx) {}
