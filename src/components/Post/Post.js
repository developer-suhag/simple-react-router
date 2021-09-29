import React from "react";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const { id, title, body } = props.post;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/post/${id}`);
  };
  return (
    <div>
      <h4>{title}</h4>
      <p>{body.slice(0, 20)}...</p>
      <button onClick={handleClick}>View More</button>
    </div>
  );
};

export default Post;
