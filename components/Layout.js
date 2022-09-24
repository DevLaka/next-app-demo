import Link from "next/link";
import styles from "../styles/Home.module.css";

const Menu = () => {
  return (
    <ul>
      <Link href="/">
        <a>Home&nbsp;</a>
      </Link>
      <Link href="/about-us">
        <a>&nbsp; About us</a>
      </Link>
    </ul>
  );
};

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Menu />
    {children}
  </div>
);

export default Layout;
