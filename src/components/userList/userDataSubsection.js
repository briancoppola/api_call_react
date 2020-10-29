import React from "react";
import Aux from "../../hoc/aux";

const userDataSubsection = (props) => {
  const dataKey = props.dataKey;
  const children = props.children;

  return (
    <div key={dataKey} className="user-card__subsection">
      <h2>{dataKey}</h2>
      <Aux>{children}</Aux>
    </div>
  );
};

export default userDataSubsection;