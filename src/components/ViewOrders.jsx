const ViewOrders = () => {
  const handleClick = () => {
    const table = document.getElementById("order-table");
    if (table) {
      table.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <button
      onClick={handleClick}
      className="btn btn-outline sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
    >
      View Orders
    </button>
  );
};

export default ViewOrders;
