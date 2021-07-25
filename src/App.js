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
        return <Employee {...employee} />;
      })}
    </div>
  );
}

export default App;
