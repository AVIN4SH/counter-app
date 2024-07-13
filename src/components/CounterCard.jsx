import { useState } from "react";

const CounterCard = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="border flex flex-col gap-8 sm:gap-4 md:gap-2 p-4 sm:p-6 m-4 rounded w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12 border-white  bg-[#212121]">
      <h1 className="text-2xl sm:text-3xl p-1  sm:p-2 font-semibold tracking-widest">
        COUNTER
      </h1>
      <div className="text-9xl py-2 sm:py-4 md:py-8 font-semibold">{count}</div>
      <div className="flex flex-row px-1 justify-center gap-3 sm:gap-5 md:gap-7 py-2 sm:py-4 md:py-8">
        <button
          onClick={handleIncrement}
          className=" py-2 md:py-3 bg-[#1e1e1e] hover:scale-105 transition-transform hover:bg-[#181818] border border-gray-300 hover:border-white rounded w-1/3"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className=" py-1 sm:py-2 md:py-3 bg-[#1e1e1e] hover:scale-105 transition-transform hover:bg-[#181818] border border-gray-300 hover:border-white rounded w-1/3"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className=" py-1 sm:py-2 md:py-3 bg-[#1e1e1e] hover:scale-105 transition-transform hover:bg-[#181818] border border-gray-300 hover:border-white rounded w-1/3"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterCard;
