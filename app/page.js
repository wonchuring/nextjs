import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import MainPage from "./main/page";

const Home = () => {
  return (
    <main id="container" className={styles.main}>
      <MainPage />
    </main>
  );
};

export default Home;
