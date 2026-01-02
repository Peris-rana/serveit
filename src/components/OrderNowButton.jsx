import { useContext } from "react";
import { toast } from "react-toastify";
import { FoodContext } from "../context/FoodContext";

const OrderNowButton = ({ foodMap, total, orders, setOrders }) => {
  const { reset } = useContext(FoodContext);

  const handleClick = () => {
    if (Object.keys(foodMap).length === 0) {
      toast.error("Please select");
      return;
    }
    const newOrder = { 
      id: crypto.randomUUID(),
      order: foodMap, total: total, tokenNumber: total };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("Orders", JSON.stringify(updatedOrders));
    toast.success("Order placed successfully");
    reset();
  };
  return (
    <button
      className="btn btn-outline sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mb-4 mt-auto text-amber-50"
      onClick={handleClick}
    >
      Order Now
    </button>
  );
};

export default OrderNowButton;
