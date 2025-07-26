import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  let products = [
    "Smartphone",
    "Laptop",
    "Wireless Headphones",
    "Smartwatch",
    "Bluetooth Speaker",
    "Gaming Console",
  ];

  return (
    <div>
      <h2 className="text-success">Available Products</h2>
      <ul className="list-group">
        {products.map((product, index) => (
          <li key={index} className="list-group-item">
            • {product}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
