import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = (props) => {
  const { id, name, email, website, phone, address } = props.friend;
  const { city } = address;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/friend/${id}`);
  };
  return (
    <div className="friend">
      <h3>Hi, I am {name}</h3>
      <p>I live in {city}</p>
      <p>Email me: {email}</p>
      <p>Call Me: {phone}</p>
      <Link to={`/friend/${id}`}>Visit</Link>
      <br />
      <button style={{ padding: "5px 20px" }} onClick={handleClick}>
        Visit me
      </button>
    </div>
  );
};

export default Friend;
