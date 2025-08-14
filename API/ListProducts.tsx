import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
type Product = {
  id: string;
  title: string;
  price: number;
  brand: string;
  category: string;
  images: string;
};

const ListProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://689c6b8958a27b18087e17dc.mockapi.io/api/s1/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("NetWork Error : fetching products from API", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Product List (Mock API)</h2>
      <div className="d-flex mb-3">
        <button className="btn btn-success">
          <img
            src="https://img.icons8.com/color/48/add--v1.png"
            alt="Add"
            style={{ width: "30px", height: "30px", marginRight: "8px" }} // marginRight for space.
          />
          Add New Product
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover table-striped align-middle">
          {/* header with gray color */}
          <thead className="table-secondary text-center">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th className="text-center">Price</th>
              <th className="text-center">Brand</th>
              <th className="text-center">Category</th>
              <th style={{ width: "100px" }}>Edit</th>
              <th style={{ width: "100px" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="text-center">
                  <img
                    src={product.images}
                    alt={product.title}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      borderRadius: "3px",
                    }}
                  />
                </td>
                <td>{product.title}</td>
                <td className="text-center">${product.price}</td>
                <td className="text-center">{product.brand}</td>
                <td className="text-center">{product.category}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm text-white"
                    style={{ backgroundColor: "blue" }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                      style={{
                        width: "26px",
                        height: "16px",
                        marginRight: "4px",
                      }}
                    />
                    Edit
                  </button>
                </td>
                <td className="text-center" style={{ width: "100px" }}>
                  <button
                    className="btn btn-sm text-white"
                    style={{ backgroundColor: "red" }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                      style={{
                        width: "20px",
                        height: "16px",
                        marginRight: "4px",
                        color: "white",
                      }}
                    />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProducts;
