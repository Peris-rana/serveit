import Invoice from "./Invoice";
const Bill = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="mt-auto md:p-3">
          <div className="md:text-5xl text-4xl font-bold text-orange-400 mb-3">Invoice</div>
          <Invoice />
        </div>
      </div>
    </>
  );
};

export default Bill;
