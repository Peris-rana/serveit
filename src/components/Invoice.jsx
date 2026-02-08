import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const presentDate = new Date();

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
    0,
  );
  return (
    <>
      <div>
        <hr />
        <div className="flex justify-between mt-1">
          <div className="text-white">
            <div>Date: {presentDate.toLocaleDateString()}</div>
            <div>Invoice #: {total}</div>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="text-lg font-bold ">Bill To: Customer <span></span></h2>
          <div className="text-white mb-2"> Nepal 12345</div>
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
            <tr>
              <td className="text-left font-bold text-slate-200">Total</td>
              <td></td>
              <td className="text-right font-bold text-white">{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Invoice;
