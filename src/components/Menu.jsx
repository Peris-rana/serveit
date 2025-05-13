import { useState, useEffect } from "react";
import Card from "./Card";
const Menu = () => {
  const [foodData, setFoodData] = useState([]);
  const [selectdFoodPrice, setSelectedFoodPrice] = useState([]);
  const [selectdFoodName, setSelectedFoodName] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("/data/details.json")
        .then((response) => response.json())
        .then((data) => {
          setFoodData(data.data.food);
        });
    };
    fetchData();
    // data is in table format
    console.table(
      selectdFoodName.map((name, index) => {
        return { Name: name, Price : selectdFoodPrice[index] };
      })
    );
  }, [selectdFoodName,selectdFoodPrice]);
  const handleClick = (price, name) => {
    setSelectedFoodPrice((prev) => [...prev, price]);
    setSelectedFoodName((prev) => [...prev, name]);
  };

  return (
    <>
      <div className="md:w-8/12 md:min-h-0 min-h-screen">
        <p className="text-4xl md:text-5xl font-black">Menu</p>
        <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-3">
          {foodData.map((food, index) => (
            <Card
              key={index}
              name={food.name}
              price={food.price}
              image={food.image}
              onSelect={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
