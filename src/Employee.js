import React from "react";

const Employee = (props) => {
  const { firstName, lastName, age } = props;
  return (
    <h1>
      this is an {firstName} {lastName} age is {age}
    </h1>
  );
};

export default Employee;
