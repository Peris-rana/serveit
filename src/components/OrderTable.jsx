import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
const OrderTable = () => {
  const { orders, removeOrder } = useContext(OrderContext);
  const [selectedOrder, setSelectedOrder] = useState(null);
  //display the orders in descending order
  const ordersSorted = [...orders].reverse();
  return (
    <>
      <section
        id="order-table"
        className=" grid grid-cols-2 md:flex md:justify-center md:gap-2 gap-1 md:flex-wrap"
      >
        {ordersSorted.map((order, index) => {
          return (
            <div
              className="card md:w-96 bg-base-100 shadow-sm border border-primary m-1.5"
              key={index}
            >
              <div className="card-body ">
                <div className="md:flex md:justify-between">
                  <h2 className="md:text-3xl text-xl text-slate-100 font-medium">
                    Order #{order.total}
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
                    setSelectedOrder(order);
                    document.getElementById("my_modal_5").showModal();
                  }}
                >
                  Edit Order
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click the button below to close
                    </p>
               <p>
               {selectedOrder && selectedOrder.total}
               </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
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
        {/* Open the modal using document.getElementById('ID').showModal() method */}
      </section>
    </>
  );
};

export default OrderTable;
