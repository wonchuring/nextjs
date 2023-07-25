const PostItem = ({ item }) => {
  const { id, title, body } = item;
  return (
    <li>
      <span>{id}</span>
      <h3> {title} </h3>
      <p> {body} </p>
    </li>
  );
};

export default PostItem;
