import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API endpoint for customers resource on MockAPI
const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/customers";

const CustomerAdd: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Hook to navigate to a different route
  // after Customer saving...
  const navigate = useNavigate();

  // email regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (email: string): boolean => {
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Handle Submit Called..");
    setError(null);
    setSuccess(null);

    if (name.trim().length == 0) {
      setError("Name cannot be left blank");
      return;
    }

    if (email.trim().length == 0) {
      setError("Email cannot be left blank");
      return;
    }

    // Email format validation
    if (!validateEmail(email.trim())) {
      setError("Please enter valid email address...");
      return;
    }

    if (age.trim().length == 0) {
      setError("Age cannot be left blank");
      return;
    }

    // Age validation - should be a positive number
    const ageNumber = parseInt(age.trim());
    if (isNaN(ageNumber) || ageNumber <= 0) {
      setError("Please enter a valid age (positive number)");
      return;
    }

    try {
      const newCustomer = {
        name: name.trim(),
        email: email.trim(),
        age: age.trim(),
      };

      // send data to mockapi.io
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCustomer),
      });

      if (!response.ok) {
        throw new Error("Failed to create Customer. !");
      }

      setSuccess("Customer added successfully !");
      // Clear form fields
      setName("");
      setEmail("");
      setAge("");

      navigate("/customers");
    } catch (error) {
      setError("Failed to create Customer. Please try again. !");
    }
  };

  return (
    <div className="container mt-2">
      <h4 className="mb-4">Add New Customer</h4>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* data entry Form split in 2 cols. to fit in a page. */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Customer name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Customer email (e.g., cust@example.com)"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Age <span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-plus-circle me-1"></i>
            Add Customer
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => navigate("/customers")}
          >
            Cancel
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default CustomerAdd;
