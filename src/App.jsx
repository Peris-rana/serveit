import "./App.css";
import Menu from "./components/Menu";
import Bill from "./components/Bill";
import OrderTable from "./components/OrderTable";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row ">
        <Menu />
        <Bill />
      </div>
      <button
        className="btn btn-outline "
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
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />{" "}
    </>
  );
};

export default App;
