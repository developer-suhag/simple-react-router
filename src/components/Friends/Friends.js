import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://randomuser.me/api/?results=21");
      const data = await res.json();
      setFriends(data.results);
    };
    loadData();
  }, []);
  return (
    <div>
      <h3 className="friend-length">I have {friends.length} friends.</h3>
      <div className="all-friends">
        {friends.map((friend) => (
          <Friend friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
