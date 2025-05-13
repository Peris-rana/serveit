import OrderNowButton from "./OrderNowButton";
import ViewOrders from "./ViewOrders";

const Invoice = () => {
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
        <div>
        </div>
        <table className="w-[300px] md:w-[450px] mt-4">
          <thead>
            <tr>
              <th className="text-left font-bold text-white">Description</th>
              <th className="text-right font-bold text-white">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left text-white">Product 1</td>
              <td className="text-right text-white">$100.00</td>
            </tr>
            <tr>
              <td className="text-left text-white">Product 2</td>
              <td className="text-right text-white">$50.00</td>
            </tr>
            <tr>
              <td className="text-left text-white">Product 3</td>
              <td className="text-right text-white">$75.00</td>
            </tr>
          </tbody>
            <tfoot>
              <tr >
                <td className="text-left font-bold text-white">Total</td>
                <td className="text-right font-bold text-white">$225.00</td>
              </tr>
            </tfoot>
        </table>
      </div>
      <OrderNowButton/>
      <ViewOrders/>
   </>
  );
};

export default Invoice;
