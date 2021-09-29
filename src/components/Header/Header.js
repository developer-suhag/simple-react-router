import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div>
      <NavLink activeStyle={activeStyle} to="/home">
        Home
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/friends">
        Friends
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
    </div>
  );
};

export default Header;
