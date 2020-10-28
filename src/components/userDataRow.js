import React from "react";

const userDataRow = (props) => {
  const dataRow = props.dataRow;
  const dataKey = props.dataKey;
  const hasChildren = props.hasChildren;

  const rowClasses = () => {
    let classes = "user-card__row";
    if (hasChildren) {
      classes += " parent";
    }
    return classes;
  };

  return (
    <div key={dataKey} className={rowClasses()}>
      <div className="user-card__column1">
        {dataKey}
      </div>
      <div className="user-card__column2">
        {typeof dataRow === "object" ? null : dataRow}
      </div>
    </div>
  );
};

export default userDataRow;