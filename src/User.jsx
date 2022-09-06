import React from "react";

export const User = (props) => {
  const { data } = props;

  console.log(props.data);

  return (
    <div>
      <h1>User Component</h1>
      <h3>{data.name}</h3>
    </div>
  );
};
