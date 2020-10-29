import React from "react";
import UserDataRow from "./userDataRow";
import UserDataSubsection from "./userDataSubsection";
import Aux from "../../hoc/aux";

const userDataRows = (props) => {
  const user = props.user;
  const userKey = props.userKey;

  const row = (dataRow, key) => {
    return <UserDataRow key={key} dataRow={dataRow} dataKey={key} />
  };

  const subsection = (key, children) => {
    return <UserDataSubsection key={key} dataKey={key} children={children} />
  };

  const rows = (data, key) => {
    const dataRow = data[key];
    const output = [];
    const hasChildren = typeof dataRow === "object";

    if (hasChildren) {
      const children = Object.keys(dataRow).map(d => {
        return rows(dataRow, d);
      });
      
      output.push(subsection(key, children));
    }
    else {
      output.push(row(dataRow, key));
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