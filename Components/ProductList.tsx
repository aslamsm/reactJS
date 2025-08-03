// ProductList.tsx
import ProductCard from "./ProductCard";
const ProductList = () => {
  const products = [
    {
      title: "Laptop",
      price: 50000,
      description: "A powerful machine for professionals.",
      brand: ["Dell", "HP", "Lenovo"],
    },
    {
      title: "Smartphone",
      price: 20000,
      description: "A sleek and modern smartphone.",
      brand: ["Samsung", "Apple", "OnePlus"],
    },
    {
      title: "Headphones",
      price: 1500,
      description: "Noise-cancelling over-ear headphones.",
      brand: ["Sony", "Bose", "JBL"],
    },
  ];

  return (
    <div>
      <h3 className="text-primary m-3 p-1">Available Products</h3>
      {products.map((product) => (
        <ProductCard
          title={product.title}
          price={product.price}
          description={product.description}
          brands={product.brand}
        />
      ))}
    </div>
  );
};
export default ProductList;
