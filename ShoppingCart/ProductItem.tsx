import React from "react";
import { useCart } from "./CartContext";

type Props = {
  id: number;
  item: string;
  desc: string;
  price: number;
  image: string;
};

export const ProductItem: React.FC<Props> = ({
  id,
  item,
  desc,
  price,
  image,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      item,
      desc,
      price,
      image,
    });
  };

  return (
    <div className="col-12 col-sm-12 mb-1 mt-2">
      <div
        className="card h-100 shadow-sm align-items-center justify-content-center border-1 position-relative overflow-hidden"
        style={{ maxWidth: "375px" }}
      >
        {/* Image Container with fixed aspect ratio */}
        <div
          className="d-flex "
          style={{
            height: "100%",
            width: "125px",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt={item}
            className="img-fluid"
            style={{
              width: "150px",
              height: "125px",
              objectFit: "contain",
              transition: "transform 0.3s ease-out-in",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/220x220/f8f9fa/6c757d?text=No+Image";
            }}
          />
        </div>

        {/* Product Details */}
        <div
          className="card-body d-flex flex-column p-1"
          style={{ minHeight: "150px" }}
        >
          <h6
            className="card-title fw-semibold mb-2 text-center"
            title={item}
            style={{ fontSize: "1.1rem" }}
          >
            {item}
          </h6>
          <p
            className="card-text text-muted mb-0 ms-0 fst-italic"
            title={desc}
            style={{
              overflow: "hidden",
              WebkitLineClamp: 3, // this is to limit no of lines in <p> tag.
              WebkitBoxOrient: "vertical",
              fontSize: "0.80rem",
              lineHeight: "1.5",
              margin: 0,
              padding: 0,
            }}
          >
            {desc}
          </p>

          <div className="mt-0">
            <div className="d-flex mb-0">
              <span className="fw-semibold text-primary ms-auto">
                ${price.toFixed(2)}
              </span>
            </div>

            <button
              className="btn btn-primary w-100 py-1 fw-semibold"
              onClick={handleAddToCart}
              aria-label={`Add ${item} to cart`}
              style={{
                borderRadius: "6px",
                transition: "all 0.3s ease-in-out",
                fontSize: "0.8rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                // e.currentTarget.style.backgroundColor = "red";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <i className="fas fa-shopping-cart me-2"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
