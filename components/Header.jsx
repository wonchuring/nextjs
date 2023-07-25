import Link from "next/link";
import styles from "./header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className="inner">
        <h1>
          <Link href="/">
            <img src="/images/common/logo.svg" alt="" />
          </Link>
        </h1>

        <NavBar />

        <ul className={styles.top_menu}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <a href="">E-mail</a>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/sitemap">Site</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
