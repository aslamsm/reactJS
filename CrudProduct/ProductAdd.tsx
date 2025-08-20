import { useState } from "react";
import { useNavigate } from "react-router-dom";

// API endpoint for Products resource on MockAPI
const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/api/s1/products";

const ProductAdd: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [price, setPrice] = useState<string>("0");

  // Hook to navigate to a different route after adding a Product
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      // Create a preview URL for the selected file
      const fileUrl = URL.createObjectURL(e.target.files[0]);
      setImage(fileUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = {
      title,
      description,
      brand,
      category,
      price,
      image,
    };

    // send data to mockapi.io
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    // go back to Product List
    navigate("/products");
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Brand</label>
              <input
                type="text"
                className="form-control"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Price ($)</label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Enter image URL or upload a file"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Upload Image File</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleFileChange}
              />
              <div className="form-text">
                Choose an image file to upload (JPG, PNG, GIF, etc.)
              </div>
            </div>
          </div>
        </div>

        {image && (
          <div className="row">
            <div className="col-12">
              <div className="mb-3">
                <label className="form-label">Image Preview</label>
                <div>
                  <img
                    src={image}
                    alt="Product preview"
                    className="img-thumbnail"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAdd;
