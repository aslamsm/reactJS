import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type User = {
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
  };
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Function to fetch users from API
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">User List</h2>
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={fetchUsers}>
          Load Users
        </button>
      </div>
      <div className="row">
        {users.map((user) => (
          // <div className="col-md-6 col-lg-4 mb-4" key={user.id}>
          <div className="card col-md-6 col-4 p-1">
            <div className="card-body">
              <h5 className="card-title text-primary">{user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                @{user.username}
              </h6>
              <p className="card-text">
                <strong>Email:</strong> {user.email}
                <br />
                <strong>Phone:</strong> {user.phone}
                <br />
                <br />
                <strong>Address:</strong>
                <br />
                {user.address.city}
                <br />
                <strong>Company:</strong> {user.company.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
