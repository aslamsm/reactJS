type EmployeeProps = {
  id: number;
  name: string;
  position: string;
  department: string;
};

function EmployeeCard({ id, name, position, department }: EmployeeProps) {
  return (
    <div className="container mt-2">
      <div className="card w-100 mb-3">
        <div className="card-body">
          <h6 className="card-text">Emp/ID : {id}</h6>
          <h6 className="card-title">Name : {name}</h6>
          <p className="card-text">Position : {position}</p>
          <p className="card-text">Department: {department}</p>
        </div>
      </div>
    </div>
  );
}
export default EmployeeCard;
