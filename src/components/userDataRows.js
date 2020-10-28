import React from "react";
import UserDataRow from "./userDataRow";
import Aux from "../hoc/aux";

const userDataRows = (props) => {
  const user = props.user;
  const userKey = props.userKey;

  const row = (data, key, hasChildren) => {
    const dataRow = data[key];
    return <UserDataRow key={key} dataRow={dataRow} dataKey={key} hasChildren={hasChildren} />
  };

  const rows = (data, key) => {
    const dataRow = data[key];
    const output = [];
    const hasChildren = typeof dataRow === "object";
    output.push(row(data, key, hasChildren));

    if (hasChildren) {
      const children = Object.keys(dataRow).map(d => {
        return rows(dataRow, d);
      });

      output.push(children);
    }

    return output;
  };

  return (
    <Aux>
      {rows(user, userKey)}
    </Aux>
  );
};

export default userDataRows;