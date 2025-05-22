import { createContext, useState } from "react";
export const FoodContext = createContext();
export const FoodProvider = ({ children }) => {
  const [selectedFood, setSelectedFood] = useState([]);
  const reset = () => {
    setSelectedFood([]);
  };
  const addFood = (name, price) => {
    setSelectedFood((prev) => [...prev, { name, price }]);
  };
  return (
    <FoodContext.Provider value={{ selectedFood, addFood, reset }}>
      {children}
    </FoodContext.Provider>
  );
};
