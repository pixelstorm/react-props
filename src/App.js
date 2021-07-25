import Employee from "./Employee";

const employeeInfo = [
  {
    firstName: "jack",
    lastName: "hilo",
    age: "22",
  },
  {
    firstName: "jiiick",
    lastName: "hilsllo",
    age: "22",
  },
  {
    firstName: "jsssck",
    lastName: "hijjjjo",
    age: "22",
  },
];
function App() {
  return (
    <div className="App">
      {employeeInfo.map((employee) => {
        const { firstName, lastName, age } = employee;
        return <Employee firstName={firstName} lastName={lastName} age={age} />;
      })}
    </div>
  );
}

export default App;
