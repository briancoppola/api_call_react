import React from "react";

const userDataRow = (props) => {
  const dataRow = props.dataRow;
  const dataKey = props.dataKey;

  const uppercase = (key) => {
    if (key === "id" || key === "bs") {
      return "uppercase"
    }
    else { return null }
  };

  return (
    <div key={dataKey} className="user-card__row">
      <div className="user-card__column1">
        <p className={uppercase(dataKey)}>{dataKey}</p>
      </div>
      <div className="user-card__column2">
        <p>{typeof dataRow === "object" ? null : dataRow}</p>
      </div>
    </div>
  );
};

export default userDataRow;