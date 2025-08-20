import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

interface Product {
  id: number;
  image: string;
  brand: string;
  category: string;
  title: string;
  description: string;
}

const ProductsList = () => {
  const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/api/s1/products";

  const [Products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id: number) => {
    try {
      const deleteUrl = `${API_URL}/${id}`;
      const response = await fetch(deleteUrl, { method: "DELETE" });

      if (!response.ok) {
        throw new Error(`Failed to delete product: ${response.status}`);
      }

      // Optimistically update the UI instead of refetching all products
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (err) {
      console.error("Error deleting product:", err);
      // Optionally show an error message to the user
    }
  };

  // Loading state
  if (loading) {
    return (
      <div id="container" className="container-fluid">
        <h1 className="text-danger">Product List</h1>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "200px" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div id="container" className="container-fluid">
        <h1 className="text-danger">Product List</h1>
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
          <button className="btn btn-outline-danger" onClick={fetchProducts}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="container" className="container-fluid">
      <h1 className="text-danger">Product List</h1>
      <Link to={`/add-Product`} className="btn btn-primary my-3">
        <i className="bi-plus-circle me-2"></i>
        Add Product
      </Link>

      {Products.length === 0 ? (
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">No Products Found</h4>
          <p>There are currently no products to display.</p>
          <Link to={`/add-Product`} className="btn btn-primary">
            Add Your First Product
          </Link>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover table-sm">
            <thead>
              <tr className="table-dark">
                <th scope="col">Id</th>
                <th scope="col" style={{ minWidth: "100px" }}>
                  Image
                </th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Brand</th>
                <th scope="col">Category</th>
                <th scope="col">Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((Product) => (
                <tr key={Product.id} className="align-middle">
                  <th scope="row">{Product.id}</th>
                  <td>
                    {Product.image ? (
                      <img
                        src={Product.image}
                        alt={Product.title}
                        className="img-thumbnail"
                        style={{
                          width: "85px",
                          height: "40px",
                          objectFit: "cover", // Changed from "fill" to "cover" for better aspect ratio
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://via.placeholder.com/85x40?text=No+Image";
                        }}
                      />
                    ) : (
                      <div
                        className="d-flex align-items-center justify-content-center bg-light border rounded"
                        style={{
                          width: "85px",
                          height: "40px",
                          fontSize: "10px",
                          color: "#6c757d",
                        }}
                      >
                        No Image
                      </div>
                    )}
                  </td>
                  <td>{Product.title}</td>
                  <td>
                    <div
                      className="text-truncate"
                      style={{ maxWidth: "200px" }}
                      title={Product.description}
                    >
                      {Product.description}
                    </div>
                  </td>
                  <td>{Product.brand}</td>
                  <td>{Product.category}</td>
                  <td>
                    <div className="d-flex flex-column flex-lg-row gap-1">
                      <Link
                        to={`/Products/${Product.id}/edit`}
                        className="btn btn-warning btn-sm"
                      >
                        <i className="bi-pencil-square me-1"></i>Edit
                      </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteProduct(Product.id)}
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

export default ProductsList;

