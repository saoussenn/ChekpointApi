import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      {users.map((user) => (
        <div className="containerIn">
          <div> {user.id}</div>
          <div> {user.name}</div>
          <div> {user.username}</div>
          <div> {user.email}</div>
        </div>
      ))}
      
    </div>
  );
};