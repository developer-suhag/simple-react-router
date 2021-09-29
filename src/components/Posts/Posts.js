import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };
    loadPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
