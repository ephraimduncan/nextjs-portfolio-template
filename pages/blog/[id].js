import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function BlogPost({ postData }) {
  const { title, contentHtml, category, date } = postData;

  return (
    <Layout>
      <div className="max-w-screen-sm px-4 py-12 mx-auto">
        <div className="font-sans text-center text-4xl font-extrabold leading-none tracking-tight m-3">
          {title}
        </div>
        <article className="prose m-auto my-8">
          <div className="text-center">
            <span className="font-sans font-medium ">{category}</span>{" "}
            | <span>{new Date(date).toUTCString().toString()}</span>
          </div>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </Layout>
  );
}
