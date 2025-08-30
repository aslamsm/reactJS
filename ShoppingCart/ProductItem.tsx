import React from "react";
import { useCart } from "./CartContext";

type Props = {
  id: number;
  item: string;
  desc: string;
  price: number;
  image: string;
};

export const ProductItem: React.FC<Props> = (props) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm mt-2">
      <img
        src={props.image}
        alt={props.item}
        className="card-img-top mx-auto"
        style={{
          objectFit: "contain",
          height: "100px",
          width: "100px",
        }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">{props.item}</h5>
        <p className="card-text small flex-grow-1 text-justify fst-italic">{props.desc}</p>
        <h6 className="fw-bold text-muted">Price: ${props.price.toFixed(0)}</h6>
        <button
          className="btn btn-primary btn-sm"
          onClick={() =>
            addToCart({
              id: props.id,
              item: props.item,
              desc: props.desc,
              price: props.price,
              image: props.image,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

