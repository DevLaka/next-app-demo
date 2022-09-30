import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import topics from "./api/topics";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

const links = [
  {
    title: "Todos",
    desc: "Here is all the Todos",
    path: "todos",
  },
  {
    title: "Users",
    desc: "Here is all the users",
    path: "users",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const handleOnChange = (e) => setQuery(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    router.push(`/posts/${query}`);
  };

  return (
    <div className={styles.container}>
      <Layout>
        {/* Head is Important for SEO  */}
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Learn React courses" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to DevLaka Learning</h1>

          <p className={styles.description}>
            Get started Learning
            <code className={styles.code}>learn/code</code>
          </p>

          <h2>Search Posts</h2>
          <form onSubmit={handleOnSubmit}>
            <input type="text" onChange={handleOnChange} />
          </form>

          <div className={styles.grid}>
            {links.map((link) => {
              const { id } = link;
              return (
                <Link key={id} href={`/demo/${link.path}`}>
                  <a className={styles.card}>
                    <h2>Learn {link.title} &rarr;</h2>
                    <p>{link.description}</p>
                  </a>
                </Link>
              );
            })}
          </div>

          <div className={styles.grid}>
            {topics.map((topic) => {
              const { id } = topic;
              return (
                <Link key={id} href={`/learn/${id}`}>
                  <a className={styles.card}>
                    <h2>Learn {topic.id} &rarr;</h2>
                    <p>{topic.description}</p>
                  </a>
                </Link>
              );
            })}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </Layout>
    </div>
  );
}
