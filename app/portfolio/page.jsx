import Folio from "@/components/Folio";
import styles from "./portfolio.module.css";

const dataList = [
  { id: 1, title: "프로젝트1", imgurl: "./images/folio/img01.jpg", desc: "프로젝트1 에 대한 설명" },
  { id: 2, title: "프로젝트2", imgurl: "./images/folio/img02.jpg", desc: "프로젝트2 에 대한 설명" },
  { id: 3, title: "프로젝트3", imgurl: "./images/folio/img03.jpg", desc: "프로젝트3 에 대한 설명" },
];

const Portfolio = () => {
  return (
    <section id="container" className="con">
      <div className="inner">
        <h2>Portfolio</h2>
        <div className={styles.list}>
          {dataList.map((item) => (
            <Folio key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
