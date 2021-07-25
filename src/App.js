import Employee from "./Employee";

const employeeInfo = [
  {
    firstName: "jack",
    lastName: "hilo",
    age: "22",
    id: "sksskdj",
  },
  {
    firstName: "jiiick",
    lastName: "hilsllo",
    age: "22",
    id: "sskdkdj",
  },
  {
    firstName: "jsssck",
    lastName: "hijjjjo",
    age: "22",
    id: "skdj",
  },
];
function App() {
  return (
    <div className="App">
      {employeeInfo.map((employee) => {
        return <Employee key={employee.id} {...employee} />;
      })}
    </div>
  );
}

export default App;
