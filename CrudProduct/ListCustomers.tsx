import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

interface Customer {
  id: number;
  name: string;
  email: string;
  age: number;
}

const CustomersList = () => {
  const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/Customers";

  const [Customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(
          `Network Error while fetching data from API ! status: ${response.status}`
        );
      }

      const data = await response.json();
      setCustomers(data);
    } catch (err) {
      setError(String(err));
      console.error("Error fetching Customers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = async (id: number) => {
    try {
      const deleteUrl = `${API_URL}/${id}`;
      const response = await fetch(deleteUrl, { method: "DELETE" });
      if (!response.ok) {
        throw new Error(`Failed to delete Customer: ${response.status}`);
      }
      setCustomers((existingCustomers) => {
        // Get all current Customers
        const allCurrentCustomers = existingCustomers;

        // Filter out the Customer we just deleted
        const remainingCustomers = allCurrentCustomers.filter((Customer) => {
          return Customer.id !== id; // Keep Customers that don't match the deleted id
        });

        // Return the new object list.
        return remainingCustomers;
      });
    } catch (err) {
      console.error("Error deleting Customer:", err);
    }
  };
  // Loading state
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-column align-items-center gap-2">
          <img
            src="./src/assets/bar.gif"
            alt=""
            style={{ width: "60px", height: "60px" }}
          />
          <div>Loading... Please Wait</div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div id="container" className="container-fluid" style={{ width: "75%" }}>
        <h1 className="text-danger">Customer List</h1>
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
          <button className="btn btn-outline-danger" onClick={fetchCustomers}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="container" className="container-sm" style={{ width: "75%" }}>
      <h4 className="text-center">Customer List</h4>
      <Link to={`/add-Customer`} className="btn btn-primary my-3">
        <i className="bi-plus-circle me-2"></i>
        Add Customer
      </Link>

      {Customers.length === 0 ? (
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">No Customers Found</h4>
          <p>There are currently no Customers to display.</p>
          <Link to={`/add-Customer`} className="btn btn-primary">
            Add Your First Customer
          </Link>
        </div>
      ) : (
        <div className="table-responsiv-sm">
          <table className="table table-striped table-hover table-sm align-middle">
            <thead>
              <tr className="table-dark">
                <th scope="col" style={{ width: "15%" }}>
                  Id
                </th>
                <th scope="col" style={{ width: "35%" }}>
                  Name
                </th>
                <th scope="col" style={{ width: "30%" }}>
                  Email
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  Age
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Edit / Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {Customers.map((Customer) => (
                <tr key={Customer.id} className="align-middle">
                  <th scope="row">{Customer.id}</th>
                  <td>
                    <div className="text-truncate">{Customer.name}</div>
                  </td>

                  <td>{Customer.email}</td>
                  <td>{Customer.age}</td>
                  <td>
                    <div className="d-flex flex-column flex-lg-row gap-1">
                      <Link
                        to={`/Customers/${Customer.id}/edit`}
                        className="btn btn-warning btn-sm"
                      >
                        <i className="bi-pencil-square me-1"></i>Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteCustomer(Customer.id)}
                      >
                        <i className="bi-trash me-1"></i>Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomersList;
