import PostItem from "@/components/PostItem";
import styles from "./post.module.css";
import { use } from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Post = () => {
  const post = use(getData());
  // console.log(post);
  return (
    <section className="con">
      <div className="inner">
        <h2>비동기처리 Post</h2>
        <ul className={styles.list}>
          {post.map((item) => (
            <PostItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Post;
