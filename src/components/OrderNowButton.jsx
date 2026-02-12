import { useContext } from "react";
import { toast } from "react-toastify";
import { FoodContext } from "../context/FoodContext";

const OrderNowButton = ({
  foodMap,
  total,
  orders,
  setOrders,
  setSelectedFoodIndex,
}) => {
  const { reset } = useContext(FoodContext);

  const handleClick = () => {
    setSelectedFoodIndex(null);
    if (Object.keys(foodMap).length === 0) {
      toast.error("Please select");
      return;
    }
    const newOrder = {
      id: crypto.randomUUID(),
      order: foodMap,
      total: total,
      tokenNumber: total,
    };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("Orders", JSON.stringify(updatedOrders));
    toast.success("Order placed successfully");
    reset();
  };
  return (
    <button
      className="btn bg-green-700 text-green-300 hover:bg-green-800 md:h-16 w-auto md:w-1/3 text-sm md:text-xl font-mono rounded-xl"
      onClick={handleClick}
    >
      Place Order
    </button>
  );
};

export default OrderNowButton;
