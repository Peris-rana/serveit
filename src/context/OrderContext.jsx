import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("Orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);
  // increase or decrease order quantity
  const increaseQuantity = (orderId, itemKey, delta) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        const currentQuantity = order.order[itemKey].quantity;
        const newQuantity = Math.max(1, currentQuantity + delta);
        return {
          ...order,
          order: {
            ...order.order,
            [itemKey]: {
              ...order.order[itemKey],
              quantity: newQuantity,
            },
          },
        };
      }
      return order;
    });
    setOrders(updatedOrders);
    localStorage.setItem("Orders", JSON.stringify(updatedOrders));
  };
  const removeOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("Orders", JSON.stringify(updatedOrders));
  };
  return (
    <OrderContext.Provider
      value={{ orders, setOrders, removeOrder, increaseQuantity }}
    >
      {children}
    </OrderContext.Provider>
  );
};
