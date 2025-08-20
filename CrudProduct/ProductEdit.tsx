import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  image: string;
  description: string;
}

const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/api/s1/products";
const ProductEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // read Product ID from URL
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // fetch Product when component loads
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch Product");
        const data = await response.json();
        setProduct(data);
      } catch {
        setError("❌ Could not load Product details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleUpdate = async () => {
    if (!product) return;

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

    try {
      setLoading(true);
      setError(null);
      setMessage(null);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!response.ok) throw new Error("Update failed");

      setMessage("✅ Product updated successfully!");
      setTimeout(() => navigate("/products"), 1500); // redirect after update
    } catch {
      setError("❌ Failed to update product.");
    } finally {
      setLoading(false);
    }
  };

  if (error)
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
        <Link to="/products" className="btn btn-secondary">
          Back to Products
        </Link>
      </div>
    );

  // loading spinner

  if (error) return <p className="text-danger">{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <div className="col-md-10">
        <h2>✏ Edit Product</h2>
        {message && <div className="alert alert-success">{message}</div>}

        <div className="border p-4 shadow-sm rounded">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label text-primary fw-semibold">
                  📝 Product Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={product.title}
                  onChange={(e) =>
                    setProduct({ ...product, title: e.target.value })
                  }
                  placeholder="Enter product title"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-primary fw-semibold">
                  💲 Price
                </label>
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        price: parseFloat(e.target.value) || 0,
                      })
                    }
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label text-primary fw-semibold">
                  🏷️ Product Brand
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={product.brand}
                  onChange={(e) =>
                    setProduct({ ...product, brand: e.target.value })
                  }
                  placeholder="Enter brand name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-primary fw-semibold">
                  📂 Product Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                  placeholder="Enter category"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label text-primary fw-semibold">
                  🖼️ Product Image
                </label>

                {/* File Input Option */}
                <div className="mb-2">
                  <label className="form-label">Upload Image File</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const result = event.target?.result as string;
                          setProduct({ ...product, image: result });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <div className="form-text">
                    Select an image file (JPG, PNG, GIF, etc.)
                  </div>
                </div>

                {/* URL Input Option */}
                <div className="mb-2">
                  <label className="form-label">Or Enter Image URL</label>
                  <input
                    type="url"
                    className="form-control"
                    value={product.image}
                    onChange={(e) =>
                      setProduct({ ...product, image: e.target.value })
                    }
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                {/* Image Preview */}
                {product.image && (
                  <div className="mt-3">
                    <div className="card">
                      <div className="card-header py-2">
                        <small className="fw-bold">📷 Image Preview</small>
                      </div>
                      <div className="card-body p-2">
                        <img
                          src={product.image}
                          alt="Preview"
                          className="img-fluid rounded"
                          style={{
                            height: "100px",
                            width: "100px",
                            objectFit: "contain",
                          }}
                        />
                        <div className="alert alert-warning d-none mb-0 mt-2">
                          <small>❌ Unable to load image preview</small>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Description - Full Width Row */}
          <div className="row">
            <div className="col-12">
              <div className="mb-1">
                <label className="form-label text-primary fw-semibold">
                  📋 Product Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={product.description || ""}
                  onChange={(e) =>
                    setProduct({ ...product, description: e.target.value })
                  }
                  placeholder="Enter detailed product description..."
                />
                <div className="form-text">
                  {product.description ? product.description.length : 0}{" "}
                  characters
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex gap-2">
            <button
              className="btn btn-primary"
              onClick={handleUpdate}
              disabled={loading}
            >
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
                "💾 Update Product"
              )}
            </button>
            <Link to="/products" className="btn btn-secondary">
              ❌ Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
