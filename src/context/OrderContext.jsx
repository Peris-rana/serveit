import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("Orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
