import styles from "./main.module.css";

const MainPage = () => {
  return (
    <section id="content" className={`con ${styles.main}`}>
      <div className="inner">
        <h2>Main Page</h2>
        <ul>
          <li>
            <h3>Title 1</h3>
          </li>
          <li>
            <h3>Title 2</h3>
          </li>
          <li>
            <h3>Title 3</h3>
          </li>
          <li>
            <h3>Title 4</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MainPage;
