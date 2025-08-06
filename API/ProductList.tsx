import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Function to fetch products from API
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Product List</h2>
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={fetchProducts}>
          Load Products
        </button>
      </div>
      <div className="row">
        {products.slice(0, 10).map((product) => (
          <div className="mb-4" key={product.id}>
            <div className="card col-md-4 col-4 p-1">
              <div className="card-body">
                <img
                  src={product.image}
                  // alt={product.title}
                  className="mt-2"
                  style={{ maxHeight: "150px" }}
                />
                <br />
                <h5 className="card-title text-primary ">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Price: ${product.price}
                </h6>
                <br />
                <p className="card-text">
                  <strong>Description:</strong> {product.description}
                  <br />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
