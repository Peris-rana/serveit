import { createContext, useState } from "react";
export const FoodContext = createContext();
export const FoodProvider = ({ children }) => {
  const [selectedFood, setSelectedFood] = useState([]);
  const addFood = (name, price) => {
    setSelectedFood((prev) => [...prev, { name, price }]);
  };
  return (
    <FoodContext.Provider value={{ selectedFood, addFood }}>
      {children}
    </FoodContext.Provider>
  );
};
