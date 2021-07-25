import React from "react";

const Employee = (props) => {
  const { name, lastname } = props;
  return (
    <h1>
      this is an {name} {lastname}
    </h1>
  );
};

export default Employee;
