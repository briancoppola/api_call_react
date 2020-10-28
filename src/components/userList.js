import React, { useState, useEffect } from "react";
import UserCard from "./userCard";

const Data = () => {
  const [usersState, setUsersState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUsersState(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    const userCards = Object.keys(usersState)
      .map(key => {
        return <UserCard key={key} user={usersState[key]} />;
    });

    return (
      <ul className="user-list">
        {userCards}
      </ul>
    );
  }
};

export default Data;