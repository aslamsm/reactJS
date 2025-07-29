//Create a React component that displays a list of employees using a static array of employee objects. Render this data dynamically into a styled HTML table using JSX.
function EmployeeTable() {
  const employees = [
    {
      id: 1,
      name: "Aslam",
      position: "Full Stack Developr",
      department: "WebDev",
    },
    {
      id: 2,
      name: "Hussain",
      position: "Product Manager",
      department: "Marketing",
    },
    { id: 3, name: "Ashaar", position: "UI/UX Designer", department: "Design" },
    {
      id: 4,
      name: "Mohamed Jameel",
      position: "Data Scientist",
      department: "Analytics",
    },
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-primary">Employee List</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeTable;
