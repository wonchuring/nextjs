import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="inner">
        <h2>저작권</h2>
        <h2>연락처 : 010-6865-8255</h2>
      </div>
    </footer>
  );
};

export default Footer;
