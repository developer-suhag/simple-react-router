import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import "./Friends.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setFriends(data);
    };
    loadData();
  }, []);
  return (
    <div>
      <h3 className="friend-length">I have {friends.length} friends.</h3>
      <div className="all-friends">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
