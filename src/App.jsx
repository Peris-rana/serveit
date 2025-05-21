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
      <OrderTable />
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
