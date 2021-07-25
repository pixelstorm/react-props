import React from "react";

const Employee = ({ name, lastname, age }) => {
  return (
    <h1>
      this is an {name} {lastname} age is {age}
    </h1>
  );
};

export default Employee;
