import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemsCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

const addCartItem = (cartItems, productToAdd) => {
  //check if product to add already exists
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id,
  );

  //update existing cart item quantity
  if (existingCartItem) {
    return cartItems.map(cartitem =>
      cartitem.id === productToAdd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem,
    );
  }
  //update existing
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  //check if product to add already exists
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToRemove.id,
  );

  //update existing cart item quantity
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cItem => cItem.id !== existingCartItem.id);
  }
  //update existing
  return cartItems.map(cartitem =>
    cartitem.id === productToRemove.id
      ? { ...cartitem, quantity: cartitem.quantity - 1 }
      : cartitem,
  );
};

const clearCartItem = (cartItems, cartItemToRemove) => {
  console.log(`remove item ${cartItemToRemove.name}`);
  return cartItems.filter(cItem => cItem.id !== cartItemToRemove.id);
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartItemsCount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0,
    );
    setCartItemsCount(newCartItemsCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0,
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = productToadd => {
    setCartItems(addCartItem(cartItems, productToadd));
  };

  const removeItemFromCart = itemToRemove => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const clearItemFromCart = itemToClear => {
    setCartItems(clearCartItem(cartItems, itemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemsCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
