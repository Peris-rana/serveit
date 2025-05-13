import Invoice from "./Invoice";
const Bill = () => {
  return (
    <>
      <div className="flex flex-col p-3 md:p-10 md:mt-0 md:ml-5 min-h-screen md:min-h-0">
        <div className="md:text-5xl text-4xl font-bold">Invoice</div>
        <Invoice />
      </div>
    </>
  );
};

export default Bill;
