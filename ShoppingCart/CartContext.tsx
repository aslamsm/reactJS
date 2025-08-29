import React, { createContext, useContext, useState } from "react";

type Product = {
  id: number;
  item: string;
  desc: string;
  price: number;
  image: string;
};

type CartItem = {
  id: number;
  item: string;
  price: number;
  image: string;
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  getTotalQuantity: () => number;
  plusQuantity: (id: number) => void;
  minusQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === product.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const plusQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const minusQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        getTotalQuantity,
        plusQuantity,
        minusQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
