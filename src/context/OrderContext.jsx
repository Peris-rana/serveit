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
  const removeOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders)
    localStorage.setItem("Orders", JSON.stringify(updatedOrders));
  };
  return (
    <OrderContext.Provider value={{ orders, setOrders,removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
