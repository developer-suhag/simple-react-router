import React from "react";
import "./Friend.css";

const Friend = (props) => {
  const { name, location, email, phone, picture } = props.friend;
  const { first, last } = name;
  const { medium, large } = picture;
  const { city, country } = location;

  return (
    <div className="friend">
      <img src={large} alt="" />
      <h3>Hi, I am {first + " " + last}</h3>
      <p>
        I live at {city} in {country}
      </p>
      <p>Email me: {email}</p>
      <p>Call Me: {phone}</p>
    </div>
  );
};

export default Friend;
