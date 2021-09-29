import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  const histories = useHistory();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    const loadFriend = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setFriend(data);
    };
    loadFriend();
  }, []);
  const handleClick = () => {
    histories.push("/friends");
  };
  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "30%",
        padding: "20px",
        margin: "auto",
        marginTop: "30px",
        borderRadius: "20px",
      }}
    >
      <h3>Friend id number {friendId}</h3>
      <h4>Name: {friend.name}</h4>
      <p>Email: {friend.email}</p>
      <p>Phone: {friend.phone}</p>
      <p>Company: {friend.company?.name}</p>
      <br />
      <br />
      <button onClick={handleClick}>See all friends</button>
    </div>
  );
};

export default FriendDetails;
