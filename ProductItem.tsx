import React from "react";
import { useCart } from "./CartContext";

type Props = {
  id: number;
  item: string;
  price: number;
  image: string;
};

export const ProductItem: React.FC<Props> = (props) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm border-0 rounded d-flex align-items-center text-center">
      <img
        src={props.image}
        className="card-img-top"
        style={{
          objectFit: "contain",
          height: "150px",
          width: "150px",
          marginBottom: "0px",
        }}
      />
      <div className="card-body d-flex flex-column align-items-center justify-content-center text-center">
        <h5 className="card-title">{props.item}</h5>
        <p className="card-text ">Price: ${props.price.toFixed(0)}</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() =>
            addToCart({
              id: props.id,
              item: props.item,
              price: props.price,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
