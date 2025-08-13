import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  images: string;
};

function ProductQuery() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [InputMsg, setInputMsg] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const fetchProducts = async (query: string = "") => {
    try {
      setLoading(true);
      setError(null);
      const url = `https://dummyjson.com/products/search?q=${query}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network Error: Failed to fetch products from API");
      }
      const data = await response.json();
      setProducts(data.products);
      setCurrentPage(1); // Reset to first page on new search
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Initial fetch
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

  // fetch error / network / server database error
  if (error) {
    return <h4 className="text-danger text-center mt-5">{error}</h4>;
  }

  if (currentProducts.length === 0) {
    return (
      <div className="container mt-3">
        <h2 className="mb-3 text-center">Product List</h2>
        {/* Products Search Input */}
        <div className="mb-4 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSearchClicked(false);
            }}
          />
          <button
            className="btn btn-primary ms-2"
            onClick={() => {
              setSearchClicked(true);
              if (searchTerm.trim() !== "") {
                setInputMsg("");
                fetchProducts(searchTerm.trim());
              } else {
                setSearchClicked(false);
                setInputMsg("Search input can't be empty!");
              }
            }}
          >
            Search
          </button>
        </div>
        {/* Products Not Found Message with expression */}

        {searchTerm.trim() !== "" && searchClicked && (
          <div className="row">
            <div className="col-12 text-center mt-4">
              <h5 className="text-danger">Product not found as per search.</h5>
            </div>
          </div>
        )}
      </div>
    );
  }
  // If products exist...
  return (
    <div className="container mt-3">
      <h2 className="mb-3 text-center">Product List</h2>

      {InputMsg && <h6 className="text-danger fs-6">{InputMsg}</h6>}

      {/* Search Input */}
      <div className="mb-4 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-primary ms-2"
          onClick={() => {
            if (searchTerm.trim() !== "") {
              setInputMsg("");
              fetchProducts(searchTerm);
            } else {
              setInputMsg("Search input can't be empty!");
            }
          }}
        >
          Search
        </button>
      </div>

      {/* Product Grid */}
      <div className="row">
        {currentProducts.map((product) => (
          <div className="col-md-3 mb-3 d-flex" key={product.id}>
            <div className="card flex-grow-1 d-flex flex-column">
              <img
                src={product.images}
                className="card-img-top p-3 img-fluid zoom-hover"
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "auto",
                  objectFit: "contain",
                  borderRadius: "20px",
                }}
                alt={product.title}
              />
              <div className="card-body">
                <h3
                  className="text-primary text-center"
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  {product.title}
                </h3>
                <p
                  className="text-center mb-2"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Price: ${product.price}
                </p>
                <h5
                  className="text-secondary"
                  style={{ fontSize: "14px", textAlign: "justify" }}
                >
                  {product.description}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  <div className="d-flex justify-content-center gap-2 mt-4">
    <button
      className="btn btn-outline-primary"
      disabled={currentPage === 1}
      onClick={() => {
        setCurrentPage(currentPage - 1);
        window.scrollTo({ top: 0 });
      }}
    >
      Prev
    </button>

    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        className={`btn ${
          currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
        }`}
        onClick={() => {
          setCurrentPage(i + 1);
          window.scrollTo({ top: 0 });
        }}
      >
        {i + 1}
      </button>
    ))}

    <button
      className="btn btn-outline-primary"
      disabled={currentPage === totalPages}
      onClick={() => {
        setCurrentPage(currentPage + 1);
        window.scrollTo({ top: 0 });
      }}
    >
      Next
    </button>
  </div>;
}

export default ProductQuery;
