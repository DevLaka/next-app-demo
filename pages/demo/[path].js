import Layout from "../../components/Layout";
import { handler } from "../api";
const Posts = ({ results, title }) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <ul>
        {title === "TODOS"
          ? results.map((todo) => <li key={todo.id}>{todo.title}</li>)
          : results.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </Layout>
  );
};

// Runs at build time
export async function getStaticPaths() {
  const results = await handler("https://jsonplaceholder.typicode.com/posts");

  return {
    paths: [{ params: { path: "todos" } }, { params: { path: "users" } }],
    fallback: true,
  };
}

// Runs at build time
export async function getStaticProps({ params }) {
  const URL = `https://jsonplaceholder.typicode.com/${params.path}`;
  const results = await handler(URL);

  switch (params.path) {
    case "todos":
      return {
        props: {
          results,
          title: "TODOS",
        },
      };

    case "users":
      return {
        props: {
          results,
          title: "USERS",
        },
      };

    default: {
      return {
        props: null,
      };
    }
  }

  return {
    props: {
      results: data,
    },
  };
}

export default Posts;
