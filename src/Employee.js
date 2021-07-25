import React from "react";

const Employee = (props) => {
  const { name, lastname, age } = props;
  return (
    <h1>
      this is an {name} {lastname} age is {age}
    </h1>
  );
};

export default Employee;
