import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import Invoice from "./Invoice";
const Bill = () => {
  const { selectedFood, removeFood } = useContext(FoodContext);
  console.log(selectedFood);

  return (
    <>
      <div className="flex flex-col">
        <div className="grid grid-cols-3 gap-1 mt-3 overflow-y-auto  max-h-[400px]">
          {selectedFood.map((food, index) => {
            return (
              <div
                className=" relative flex flex-col items-center gap-3 mt-3 p-2 cursor-pointer"
                key={index}
              >
                <button
                  className=" text-3xl absolute top-0 right-0 rounded-full bg-red-500 md:h-7 md:w-7 w-5 h-5 cursor-pointer flex  items-center  justify-center"
                  onClick={() => removeFood(index)}
                >
                  -
                </button>
                <div className="avatar">
                  <div className="text-blue-600 ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                    <img src={food.image} />
                  </div>
                </div>
                <span className="badge badge-outline badge-success text-lg p-2">
                  {food.name}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-auto md:p-3">
          <div className="md:text-5xl text-4xl font-bold text-orange-400 mb-3">
            Invoice
          </div>
          <Invoice />
        </div>
      </div>
    </>
  );
};

export default Bill;
