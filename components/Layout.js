import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Menu = () => {
  return (
    <ul>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about-us">
        <a>&nbsp; About us</a>
      </Link>
      <Link href="/posts">
        <a>&nbsp; Posts</a>
      </Link>
    </ul>
  );
};

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Menu />
      {children}
      <a href="#" onClick={() => router.back()}>
        Back
      </a>
    </div>
  );
};

export default Layout;
