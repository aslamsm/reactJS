import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeCard from "./components/EmployeeCard";
function App() {
  return (
    <>
      <EmployeeTable />
      <EmployeeCard
        id={101}
        name="Mohamed Suhail"
        position="Software Engineer"
        department="Engineering"
      ></EmployeeCard>
    </>
  );
}
export default App;
