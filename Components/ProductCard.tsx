// ProductCard.tsx
interface ProductProps {
  title: string;
  price: number;
  description: string;
  brands: string[];
}

// Product information
const ProductCard = (props: ProductProps) => {
  return (
    <div className="border border-info  m-3 p-3">
      <h3>{props.title}</h3>
      <p>Price: {props.price}</p>
      <p>Description: {props.description}</p>
      <p>Product Brands:</p>
      <ol>
        {props.brands.map((brand, index) => (
          <li key={index}>{brand}</li>
        ))}
      </ol>
    </div>
  );
};

export default ProductCard;
