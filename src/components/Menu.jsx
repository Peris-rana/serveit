import { useState, useEffect } from "react";
import Card from "./Card";
const Menu = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("/data/details.json")
        .then((response) => response.json())
        .then((data) => {
          setFoodData(data.data.food);
        });
    };
    fetchData();
  }, []);
  
  return (
    <>
      <div className="md:w-8/12 md:min-h-0 sm:min-h-screen">
        <p className="text-4xl md:text-5xl font-black">Menu</p>
        <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-3">
          {foodData.map((food, index) => (
            <Card
              key={index}
              name={food.name}
              price={food.price}
              image={food.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
