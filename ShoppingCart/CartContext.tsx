import React, { createContext, useContext, useState } from "react";

type Product = {
  id: number;
  item: string;
  price: number;
};

type CartItem = {
  id: number;
  item: string;
  price: number;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[]; // The current items in the cart
  addToCart: (product: Product) => void; // Add products to the cart
}

// Create a context.
const CartContext = createContext<CartContextType | undefined>(undefined);

// use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
};

// main Cartprovider that will wrap around our app or components
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]); // Initial cart is empty

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === product.id);

      if (found) {
        // If the product already exists, just increase its quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If it's a new product, add it to the cart with quantity = 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
