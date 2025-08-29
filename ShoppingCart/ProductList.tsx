import React from "react";
import { ProductItem } from "./ProductItem";
const products = [
  {
    id: 1,
    item: "Laptop HP",
    desc: "Reliable and performance-driven, HP laptops are ideal for professionals, students, and everyday users. Known for their sleek design and strong build quality.",
    price: 450,
    image: "./src/assets/HP.jpg",
  },
  {
    id: 2,
    item: "Laptop Dell",
    desc: "Dell laptops offer durability and powerful computing for both business and personal use. Available in a wide range of configurations to meet diverse needs.",
    price: 550,
    image: "./src/assets/Dell.jpg",
  },
  {
    id: 3,
    item: "Laptop Lenevo",
    desc: "Lenovo laptops combine innovative design with powerful specs. Popular for business use and multitasking, especially the ThinkPad and IdeaPad series.",
    price: 400,
    image: "./src/assets/Lenevo.jpg",
  },
  {
    id: 4,
    item: "Laptop Asus",
    desc: "Asus laptops are known for their high performance and stylish aesthetics. Great for gaming, creative work, and everyday use, they offer cutting-edge features at competitive prices.",
    price: 400,
    image: "./src/assets/Asus.jpg",
  },
  {
    id: 5,
    item: "Laptop Acer",
    desc: "Known for high performance and stylish aesthetics, Asus laptops are great for gaming, creative work, and everyday use. Offers cutting-edge features at competitive prices.",
    price: 350,
    image: "./src/assets/Acer.jpg",
  },
  {
    id: 6,
    item: "Laptop Toshiba",
    desc: "Toshiba laptops are trusted for their solid performance and longevity. Great for basic to moderate computing tasks, with a reputation for dependability.",
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
              desc={product.desc}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
