import { useContext } from "react";
import OrderNowButton from "./OrderNowButton";
import ViewOrders from "./ViewOrders";
import { FoodContext } from "../context/FoodContext";

const Invoice = () => {
  const foodMap = {};
  const { selectedFood } = useContext(FoodContext);
  selectedFood.forEach((food) => {
    if (foodMap[food.name]) {
      foodMap[food.name].quantity += 1;
    } else {
      foodMap[food.name] = { price: food.price, quantity: 1 };
    }
  });
  const total = Object.values(foodMap).reduce(
    (acc, food) => acc + food.price * food.quantity,
    0
  );
  console.log(foodMap);
  return (
    <>
      <div className=" md:min-h-0 ">
        <hr className="mt-4" />
        <div className="flex justify-between mt-1">
          <h1 className="text-lg font-bold">Invoice</h1>
          <div className="text-white">
            <div>Date: 01/05/2023</div>
            <div>Invoice #: INV12345</div>
          </div>
        </div>
        <div className="mb-8 mt-3">
          <h2 className="text-lg font-bold ">Bill To:</h2>
          <div className="text-white mb-2">Peris rana</div>
          <div className="text-white mb-2">Anytown, Nepal 12345</div>
        </div>
        <div></div>
        <table className="w-[300px] md:w-[450px] mt-4">
          <thead>
            <tr>
              <th className="text-left font-bold text-white">Description</th>
              <th className="text-left font-bold text-white">Quantity</th>
              <th className="text-right font-bold text-white">Amount</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(foodMap).map(([name, food], index) => {
              return (
                <tr key={index}>
                  <td className="text-left text-white">{name}</td>
                  <td className="text-left text-white">{food.quantity}</td>
                  <td className="text-right text-white">
                    {food.price * food.quantity}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="mt-9">
              <td className="text-left font-bold text-slate-200">Total</td>
              <td></td>
              <td className="text-right font-bold text-white">{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <OrderNowButton foodMap={foodMap} total={total} />
      <ViewOrders />
    </>
  );
};

export default Invoice;
