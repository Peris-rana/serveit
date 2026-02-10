import { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const FoodContext = createContext();
export const FoodProvider = ({ children }) => {
  const [selectedFood, setSelectedFood] = useState([]);
  const reset = () => {
    setSelectedFood([]);
  };
  const addFood = (name, price, image) => {
    setSelectedFood((prev) => [...prev, { name, price, image }]);
  };

  // remove food
  const removeFood = (indexToRemove) => {
    setSelectedFood((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <FoodContext.Provider value={{ selectedFood, addFood, removeFood, reset }}>
      {children}
    </FoodContext.Provider>
  );
};
