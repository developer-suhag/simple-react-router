import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const history = useHistory();
  useEffect(() => {
    const loadPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const data = await res.json();
      setPost(data);
    };
    loadPost();
  }, []);
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <div
      style={{
        width: "40%",
        backgroundColor: "#fff",
        padding: "20px",
        margin: "auto",
        marginTop: "30px",
        borderRadius: "20px",
        boxShadow: "5px 5px 5px #ddd",
      }}
    >
      <h3>Post id : {postId}</h3>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <br />
      <br />
      <button onClick={handleClick}>See all posts</button>
    </div>
  );
};

export default PostDetail;
