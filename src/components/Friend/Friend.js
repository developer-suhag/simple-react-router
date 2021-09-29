import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { id, name, email, website, phone, address } = props.friend;
  const { city } = address;

  return (
    <div className="friend">
      <h3>Hi, I am {name}</h3>
      <p>I live in {city}</p>
      <p>Email me: {email}</p>
      <p>Call Me: {phone}</p>
      <button style={{ padding: "5px 20px" }}>
        <Link to={`/friend/${id}`}>Visit</Link>
      </button>
    </div>
  );
};

export default Friend;
