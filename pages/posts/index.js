import Layout from "../../components/Layout";
import { handler } from "../api";
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
  const results = await handler("https://jsonplaceholder.typicode.com/posts");

  return {
    props: {
      results,
    },
  };
}

export default Posts;
