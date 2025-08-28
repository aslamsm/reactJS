import React from "react";
import { ProductItem } from "./ProductItem";
const products = [
  {
    id: 1,
    item: "Laptop HP",
    price: 450,
    image: "./src/assets/HP.jpg",
  },
  {
    id: 2,
    item: "Laptop Dell",
    price: 550,
    image: "./src/assets/Dell.jpg",
  },
  {
    id: 3,
    item: "Laptop Lenevo",
    price: 400,
    image: "./src/assets/Lenevo.jpg",
  },
  {
    id: 4,
    item: "Laptop Asus",
    price: 400,
    image: "./src/assets/Asus.jpg",
  },
  {
    id: 5,
    item: "Laptop Acer",
    price: 350,
    image: "./src/assets/Acer.jpg",
  },
  {
    id: 6,
    item: "Laptop Toshiba",
    price: 525,
    image: "./src/assets/Toshiba.jpg",
  },
];

export const ProductList: React.FC = () => {
  return (
    <div className="container mt-0">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4" key={product.id}>
            <ProductItem
              id={product.id}
              item={product.item}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
