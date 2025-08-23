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
  const API_URL = "https://689c6b8958a27b18087e17dc.mockapi.io/products";

  const [Products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
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
      setProducts(data);
    } catch (err) {
      setError(String(err));
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
      setProducts((existingProducts) => {
        // Get all current products
        const allCurrentProducts = existingProducts;

        // Filter out the product we just deleted
        const remainingProducts = allCurrentProducts.filter((product) => {
          return product.id !== id; // Keep products that don't match the deleted id
        });

        // Return the new object list.
        return remainingProducts;
      });
    } catch (err) {
      console.error("Error deleting product:", err);
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
      <h4 className="text-center">Product List</h4>
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
                <th scope="col" style={{ width: "10%" }}>
                  Id
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  Image
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Title
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Description
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Brand
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Category
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Edit / Delete
                </th>
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
