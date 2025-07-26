function ProductList() {
  const Products = [
    {
      title: "Smartphone",
      price: 599,
      description: "Latest 5G smartphone with high-resolution camera.",
    },
    {
      title: "Laptop",
      price: 999,
      description: "Lightweight laptop with Intel i7 processor.",
    },
    {
      title: "Bluetooth Speaker",
      price: 49,
      description: "Portable speaker with deep bass and long battery life.",
    },
  ];

  return (
    <>
      <br />
      <h2 className="text-primary">Product List</h2>
      <ul className="list-group">
        {Products.map((product) => (
          <li className="list-group-item">
            <h5>{product.title}</h5>
            <p className="text-success">{product.price}$</p>
            <small className="text-muted">{product.description}</small>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ProductList;
