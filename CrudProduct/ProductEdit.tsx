import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/products";

const ProductEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Individual useState for each field
  const [title, setTitle] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Image upload states
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageInputType, setImageInputType] = useState<"url" | "upload">("url");
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch Product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error("Failed to fetch Product");
        const data = await response.json();

        // Set state values
        setTitle(data.title);
        setBrand(data.brand);
        setCategory(data.category);
        setPrice(data.price);
        setImage(data.image);
        setDescription(data.description);
      } catch {
        setError("Could not load Product details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Convert file to base64 data URL
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Handle file upload
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image file (PNG, JPG, GIF, etc.)");
      return;
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      setError("Image file must be less than 5MB");
      return;
    }

    try {
      setUploadLoading(true);
      setError(null);

      // Convert to base64
      const base64String = await convertFileToBase64(file);

      setImageFile(file);
      setImage(base64String);
      setMessage("Image uploaded successfully!");
    } catch (error) {
      setError("Failed to process image file");
    } finally {
      setUploadLoading(false);
    }
  };

  // Handle switching between URL and upload input types
  const handleImageInputTypeChange = (type: "url" | "upload") => {
    setImageInputType(type);
    if (type === "url") {
      setImageFile(null);
    } else {
      setImage("");
    }
    setError(null);
  };

  const validateForm = () => {
    // Reset error
    setError(null);

    // Helper function to check if a value is empty/null/undefined
    const isEmpty = (value: any): boolean => {
      if (value === null || value === undefined) return true;
      if (typeof value === "string" && value.trim().length === 0) return true;
      return false;
    };

    // Validation checks
    if (isEmpty(title)) {
      setError("Title cannot be left blank");
      return false;
    }

    if (isEmpty(brand)) {
      setError("Brand cannot be left blank");
      return false;
    }

    if (isEmpty(category)) {
      setError("Category cannot be left blank");
      return false;
    }

    if (!price || isNaN(price) || price <= 0) {
      setError("Price must be a valid number greater than 0");
      return false;
    }

    if (isEmpty(description)) {
      setError("Description cannot be left blank");
      return false;
    }

    if (isEmpty(image) && !imageFile) {
      setError("Please provide an image (URL or file upload)");
      return false;
    }

    // Additional URL validation for image (only if using URL input)
    if (imageInputType === "url" && image) {
      try {
        new URL(image.trim());
      } catch {
        setError("Please enter a valid image URL");
        return false;
      }
    }

    return true;
  };

  const handleUpdate = async () => {
    // Validate the form
    if (!validateForm()) {
      return;
    }

    // Create product object from individual states
    const productData = {
      id: id,
      title: title.trim(),
      brand: brand.trim(),
      category: category.trim(),
      price: Number(price),
      image: image.trim(),
      description: description.trim(),
    };

    try {
      setLoading(true);
      setError(null);
      setMessage(null);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        throw new Error("Product Update failed !");
        return;
      }

      setMessage("Product updated successfully!");
      setTimeout(() => navigate("/products"), 1500);
    } catch {
      setError("Failed to update product.");
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

  if (error && !title) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">{error}</div>
        <Link to="/products" className="btn btn-secondary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="col-md-12">
        <h4 className="mb-4">✏ Edit Product</h4>

        {/* Error Message */}
        {error && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
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
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            {message}
            <button
              type="button"
              className="btn-close"
              onClick={() => setMessage(null)}
              aria-label="Close"
            ></button>
          </div>
        )}

        <div className="border p-4 shadow-sm rounded">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Product Title *
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter product title"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Product Brand *
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Enter brand name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Product Category *
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter category"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Product Description *
                </label>
                <textarea
                  className="form-control"
                  rows={1}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter detailed product description..."
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Price *</label>
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Product Image *
                </label>

                {/* Image Input Type Toggle */}
                <div className="mb-3">
                  <div className="btn-group w-100" role="group">
                    <input
                      type="radio"
                      className="btn-check"
                      name="imageInputType"
                      id="urlOption"
                      checked={imageInputType === "url"}
                      onChange={() => handleImageInputTypeChange("url")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="urlOption"
                    >
                      Enter URL
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="imageInputType"
                      id="uploadOption"
                      checked={imageInputType === "upload"}
                      onChange={() => handleImageInputTypeChange("upload")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="uploadOption"
                    >
                      Upload File
                    </label>
                  </div>
                </div>

                {/* URL Input Option */}
                {imageInputType === "url" && (
                  <div className="mb-3">
                    <label className="form-label small">Enter Image URL</label>
                    <input
                      type="url"
                      className="form-control"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                )}

                {/* File Upload Option */}
                {imageInputType === "upload" && (
                  <div className="mb-3">
                    <label className="form-label small">
                      Upload Image File
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={handleFileUpload}
                    />
                    <div className="form-text">
                      Supported formats: PNG, JPG, GIF. Max size: 5MB
                    </div>

                    {imageFile && (
                      <div className="mt-2 text-muted small">
                        Selected: {imageFile.name} (
                        {Math.round(imageFile.size / 1024)}KB)
                      </div>
                    )}
                  </div>
                )}

                {/* Image Preview */}
                {image && image.trim() && (
                  <div className="mt-3">
                    <div className="card">
                      <div className="card-header py-2">
                        <small className="fw-bold">Image Preview</small>
                      </div>
                      <div className="card-body p-2">
                        <img
                          src={image}
                          alt="Image"
                          className="img-fluid rounded"
                          style={{
                            height: "40px",
                            width: "75px",
                            objectFit: "cover",
                          }}
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = "none";
                            const errorDiv = document.createElement("div");
                            errorDiv.className = "text-muted";
                            errorDiv.innerHTML =
                              '<i class="bi bi-card-image" style="font-size: 3rem;"></i><br>Failed to load image';
                            target.parentNode?.appendChild(errorDiv);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Buttons below image */}
                <div className="d-flex gap-2 mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={handleUpdate}
                    disabled={loading || uploadLoading}
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
                      "Update Product"
                    )}
                  </button>
                  <Link to="/products" className="btn btn-secondary">
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

export default ProductEdit;
