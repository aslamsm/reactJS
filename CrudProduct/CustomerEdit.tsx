import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/Customers";

const CustomerEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Individual useState for each field
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch Customer
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch Customer");
        const data = await response.json();

        // Set state values
        setName(data.name);
        setEmail(data.email);
        setAge(data.age);
      } catch {
        setError("Could not load Customer details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCustomer();
    }
  }, [id]);

  const validateForm = () => {
    // Reset error
    setError(null);

    // check if a value is empty/null/undefined
    const isEmpty = (value: any): boolean => {
      if (value === null || value === undefined) return true;
      if (typeof value === "string" && value.trim().length === 0) return true;
      return false;
    };

    // checks Validation for each field
    if (isEmpty(name)) {
      setError("Name cannot be left blank");
      return false;
    }

    if (isEmpty(email)) {
      setError("Email cannot be left blank");
      return false;
    }

    if (!age || isNaN(age) || age <= 0) {
      setError("Age must be a valid number greater than 0");
      return false;
    }

    return true;
  };

  const handleUpdate = async () => {
    // Validate the form
    if (!validateForm()) {
      return;
    }

    // Create Customer object from individual states
    const CustomerData = {
      id: id,
      name: name.trim(),
      email: email.trim(),
      age: Number(age),
    };

    try {
      setLoading(true);
      setError(null);
      setMessage(null);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(CustomerData),
      });

      if (!response.ok) {
        throw new Error("Customer Update failed !");
        return;
      }

      setMessage("Customer updated successfully!");
      setTimeout(() => navigate("/Customers"), 1500);
    } catch {
      setError("Failed to update Customer.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-column align-items-center gap-2">
          <div
            className="spinner-border text-primary"
            style={{ width: "40px", height: "40px" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div>Loading... Please Wait</div>
        </div>
      </div>
    );
  }

  if (error && !name) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
        <Link to="/Customers" className="btn btn-secondary">
          Back to Customers
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="col-md-12">
        <h4 className="mb-4">✏ Edit Customer</h4>

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
            <button
              type="button"
              className="btn-close"
              onClick={() => setError(null)}
              aria-label="Close"
            ></button>
          </div>
        )}

        {/* Success Message */}
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
            <button
              type="button"
              className="btn-close"
              onClick={() => setMessage(null)}
              aria-label="Close"
            ></button>
          </div>
        )}

        <div className="border p-4">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Customer Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Customer name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Customer Email *
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Age *</label>
                <div className="input-group">
                  <span className="input-group-text"></span>
                  <input
                    type="number"
                    className="form-control"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <div className="mb-3">
                {/* Buttons below image */}
                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-primary" onClick={handleUpdate}>
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Updating...
                      </>
                    ) : (
                      "Update Customer"
                    )}
                  </button>
                  <Link to="/Customers" className="btn btn-secondary">
                    ❌ Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CustomerEdit;
