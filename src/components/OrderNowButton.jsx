import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const OrderNowButton = ({ foodMap, total }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("Orders");
    if (saved) {
      return setOrders(JSON.parse(saved));
    }
  }, []);
  const handleClick = () => {
    if (Object.keys(foodMap).length === 0) {
      toast.error("Please select");
      return;
    }
    const newOrder = { order: foodMap, total: total };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("Orders", JSON.stringify(updatedOrders));
    toast.success("Order placed successfully");
  };
  return (
    <button
      className="btn btn-success sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mb-4 mt-auto text-amber-50"
      onClick={handleClick}
    >
      Order Now
    </button>
  );
};

export default OrderNowButton;
