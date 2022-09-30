import Layout from "../../components/Layout";
import { handler } from "../api";
const Posts = ({ results, query }) => {
  return (
    <Layout>
      <h1>Post ID: {query}</h1>
      <h2>{results.title}</h2>
      <p>{results.body}</p>
    </Layout>
  );
};

// Runs at request time (next/link or next/router)
export async function getServerSideProps({ params }) {
  const results = await handler(
    `https://jsonplaceholder.typicode.com/posts/${params.query}`
  );
  console.log({ params });
  return {
    props: {
      results,
      query: params.query,
    },
  };
}

export default Posts;
