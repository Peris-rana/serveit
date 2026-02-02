import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
const OrderTable = () => {
  const { orders, removeOrder } = useContext(OrderContext);
  const [selectedOrder, setSelectedOrder] = useState(null);
  //display the orders in descending order
  const ordersSorted = [...orders].reverse();

  //open modal
  const openModal = (order) => {
    setSelectedOrder(order);
    document.getElementById("order_modal").showModal();
  };
  //close modal
  const closeModal = () => {
    setSelectedOrder(null);
    document.getElementById("order_modal").close();
  };

  return (
    <>
      <section
        id="order-table"
        className=" grid grid-cols-2 md:flex md:justify-center md:gap-2 gap-1 md:flex-wrap"
      >
        {ordersSorted.map((order) => {
          return (
            <div
              className="card md:w-96 bg-base-100 shadow-sm border border-primary m-1.5"
              key={order.id}
            >
              <div className="card-body ">
                <div className="md:flex md:justify-between">
                  <h2 className="md:text-3xl text-xl text-slate-100 font-medium">
                    Order #{order.id}
                  </h2>
                  <span className="text-xl badge badge-outline text-slate-500 p-4 badge-ghost">
                    {order.total}
                  </span>
                </div>
                <ul className="h-8/12 ">
                  {Object.entries(order.order).map(([key, details]) => {
                    return (
                      <li key={key}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="md:text-xl  text-sm">{key}</span>
                        <span className="md:text-xl text-sm">
                          {" "}
                          {details.quantity}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className="btn bg-blue-500 hover:bg-blue-900"
                  onClick={() => {
                    openModal(order);
                  }}
                >
                  Edit Order
                </button>

                <button
                  className="btn btn-primary  w-full  md:btn-block"
                  onClick={() => {
                    removeOrder(order.id);
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          );
        })}
      </section>
      <dialog id="order_modal" className="modal sm:modal-middle">
        <div className="modal-box">
          {selectedOrder && (
            <>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <p>{selectedOrder.total}</p>
              <ul className="h-9/12 list-none">
                {Object.entries(selectedOrder.order).map(([key, details]) => {
                  return (
                    <li key={key}>
                      {key}: {details.quantity}
                    </li>
                  );
                })}
              </ul>
            </>
          )}

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={() => closeModal()}>
                {" "}
                close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default OrderTable;
