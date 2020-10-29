import React from "react";
import UserDataRows from "./userDataRows";

const userCard = (props) => {
  const user = props.user;
  const data = Object.keys(user)
    .map(userKey => {
      return (
        <UserDataRows key={userKey} user={user} userKey={userKey} />
      );
  });

  return (
    <li className="user-card">
      {data}
    </li>
  );
};

export default userCard;