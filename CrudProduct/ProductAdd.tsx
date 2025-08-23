import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API endpoint for Products resource on MockAPI
const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/products";

const ProductAdd: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [price, setPrice] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Hook to navigate to a different route
  // after product saving...
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      // Create a preview URL for the selected file
      const fileUrl = URL.createObjectURL(file);
      setImage(fileUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Handle Submit Called..");
    setError(null);
    setSuccess(null);

    if (title.trim().length == 0) {
      setError("Title cannot be left blank");
      return;
    }

    if (brand.trim().length == 0) {
      setError("Brand cannot be left blank");
      return;
    }

    if (category.trim().length == 0) {
      setError("Category cannot be left blank");
      return;
    }

    if (price.trim().length == 0) {
      setError("Price cannot be left blank");
      return;
    }

    if (description.trim().length == 0) {
      setError("Description cannot be left blank");
      return;
    }

    try {
      const newProduct = {
        title: title.trim(),
        description: description.trim(),
        brand: brand.trim(),
        category: category.trim(),
        price: price.trim(),
        image,
      };

      // send data to mockapi.io
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("Failed to create Product. !");
      }

      setSuccess("Product added successfully !");
      // Clear form fields
      setTitle("");
      setDescription("");
      setBrand("");
      setCategory("");
      setPrice("");
      setImage("");
      setImageFile(null);

      // go back to Product List after a short delay
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      setError("Failed to create product. Please try again. !");
    }
  };

  return (
    <div className="container mt-2">
      <h2 className="mb-4">Add New Product</h2>

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
                Title <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Product Title"
              />
            </div>
          </div>

          {/* data entry Form split in 2 cols. to fit in a page. */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">
                Brand <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Enter Brand name"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">
                Category <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Enter Product Category"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">
                Price ($) <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label fw-bold">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                className="form-control"
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Product Description"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">Image URL</label>
              <input
                type="url"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
                disabled={!!imageFile}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label fw-bold">Upload Image File</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleFileChange}
                style={{
                  backgroundColor: "#6c757d",
                  color: "#ffc107",
                  border: "1px solid #6c757d",
                }}
              />
              <div className="form-text fw-bold">
                Choose an image file (JPG, PNG, GIF, etc.)
              </div>
            </div>
          </div>
        </div>

        {image && (
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label">Image Preview</label>
                <div className="border rounded p-2">
                  <img
                    src={image}
                    alt="Product preview"
                    className="img-thumbnail"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-plus-circle me-1"></i>
            Add Product
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => navigate("/products")}
          >
            Cancel
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default ProductAdd;
