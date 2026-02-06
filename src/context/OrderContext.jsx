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
  // calculate total price
  // const calculateTotal = () => {
  //   return orders.reduce((total, order) => {
  //     const totalOrder = Object.values(order.order).reduce(
  //       (sum, item) => sum + (item.price * item.quantity),
  //       0,
  //     );
  //     return total + totalOrder;
  //   }, 0);
  // };

  const calculateTotal = (order) => {
    return Object.values(order.order).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  };
  const removeOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("Orders", JSON.stringify(updatedOrders));
  };
  return (
    <OrderContext.Provider
      value={{
        orders,
        setOrders,
        removeOrder,
        increaseQuantity,
        calculateTotal,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
