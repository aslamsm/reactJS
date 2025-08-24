import React from "react";

type CardProps = {
  type?: string;
  imageSrc?: string;
  children?: React.ReactNode;
};

function Card({ type, imageSrc, children }: CardProps) {
  // Basic card styles
  const cardStyle = {
    border: "2px solid #ccc",
    padding: "20px",
    borderRadius: "12px",
    margin: "16px auto",
    textAlign: "center" as const,
    width: "280px",
    boxShadow: "0 5px 10px rgba(18, 17, 17, 0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f8f5ff",
  };

  return (
    <div style={cardStyle}>
      {/* Show image if imageSrc is provided */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Card"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        />
      )}

      {type && <h1 style={{ fontSize: "22px", margin: "10px 0" }}>{type}</h1>}
      <div style={{ fontSize: "14px", color: "#555" }}>{children}</div>
    </div>
  );
}

export default Card;
