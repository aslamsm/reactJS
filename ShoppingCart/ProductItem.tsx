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
    <div
      className="card vh-75 shadow-sm mt-2"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="image-container position-relative overflow-hidden"
        style={{
          height: "200px",
          width: "200px",
          display: "flex",
          padding: "3px",
          objectFit: "contain",
        }}
      >
        <img
          src={props.image}
          alt={props.item}
          className="product-image"
          style={{
            maxHeight: "200px",
            maxWidth: "200px",
            objectFit: "contain",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center ">{props.item}</h5>
        <p className="card-text small flex-grow-1 text-justify fst-italic">
          {props.desc}
        </p>
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
