import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { FoodContext } from "../context/FoodContext";
import OrderTable from "./OrderTable";
import { OrderContext } from "../context/OrderContext";
import OrderNowButton from "./OrderNowButton";

const Menu = () => {
  const [foodData, setFoodData] = useState([]);
  const [selectdFoodIndex, setSelectedFoodIndex] = useState(null);
  const [selectdFoodPrice, setSelectedFoodPrice] = useState([]);
  const [selectdFoodName, setSelectedFoodName] = useState([]);
  const [selectdFoodImage, setSelectedFoodImage] = useState([]);
  const { addFood, reset } = useContext(FoodContext);
  useEffect(() => {
    const fetchData = () => {
      fetch("/serveit/data/details.json")
        .then((response) => response.json())
        .then((data) => {
          setFoodData(data.data.food);
        });
    };
    fetchData();
    // data is in table format
    console.table(
      selectdFoodName.map((name, index) => {
        return { Name: name, Price: selectdFoodPrice[index] };
      }),
    );
  }, [selectdFoodName, selectdFoodPrice, selectdFoodImage]);
  const handleClick = (index, price, name, image) => {
    setSelectedFoodIndex(index);
    setSelectedFoodPrice((prev) => [...prev, price]);
    setSelectedFoodName((prev) => [...prev, name]);
    setSelectedFoodImage((prev) => [...prev, image]);
    addFood(name, price, image);
  };
  // clear the index with reset
  const handleReset = () => {
    setSelectedFoodIndex(null);
    setSelectedFoodPrice([]);
    setSelectedFoodName([]);
    setSelectedFoodImage([]);
    reset();
  };
  const foodMap = {};
  const { selectedFood } = useContext(FoodContext);
  const { orders, setOrders } = useContext(OrderContext);

  selectedFood.forEach((food) => {
    if (foodMap[food.name]) {
      foodMap[food.name].quantity += 1;
    } else {
      foodMap[food.name] = { price: food.price, quantity: 1 };
    }
  });
  const total = Object.values(foodMap).reduce(
    (acc, food) => acc + food.price * food.quantity,
    0,
  );

  return (
    <>
      <div className="md:w-8/12 md:min-h-0 min-h-screen">
        <p className="text-4xl md:text-5xl font-black">Menu</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
          {foodData.map((food, index) => (
            <Card
              key={index}
              index={index}
              name={food.name}
              price={food.price}
              image={food.image}
              onSelect={handleClick}
              isSelected={selectdFoodIndex === index}
            />
          ))}
        </div>
        <div className="flex md:justify-start gap-1 flex-col md:flex-row mt-4 pt-2">
          <button
            className="btn bg-slate-600 hover:bg-slate-700 text-slate-300 md:h-16 md:w-1/3 font-mono text-sm md:text-xl"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="btn bg-blue-700 hover:bg-blue-800 text-blue-300 md:h-16 md:w-1/3 text-sm md:text-xl font-mono p-3"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Open Orders
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-7xl">
              <h3 className="font-bold text-lg">CurrentOrders</h3>
              <OrderTable />
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <OrderNowButton
            foodMap={foodMap}
            total={total}
            orders={orders}
            setOrders={setOrders}
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
