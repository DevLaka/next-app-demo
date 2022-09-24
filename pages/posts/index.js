import { RSC_MODULE_TYPES } from "next/dist/shared/lib/constants";
import Layout from "../../components/Layout";
const Posts = ({ results }) => {
  return (
    <Layout>
      <h1>Posts</h1>
      <ul>
        {results.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

// Runs at build time
export async function getStaticProps() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);

  return {
    props: {
      results: data,
    },
  };
}

export default Posts;
