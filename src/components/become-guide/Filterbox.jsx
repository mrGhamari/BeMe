import React from "react";

const Filterbox = () => {
  return (
    <div className="border-b border-gray-2 py-3 ps-2">
      <button className="bg-teal-400 hover:bg-teal-500 text-dark font-bold px-5 py-1 rounded ml-2 transition-all duration-300">
        قرارها
      </button>
      <button className="bg-teal-400 hover:bg-teal-500 text-dark font-bold px-5 py-1 rounded ml-2 transition-all duration-300">
        اشخاص
      </button>
      <button className="bg-teal-400 hover:bg-teal-500 text-dark font-bold px-5 py-1 rounded ml-2 transition-all duration-300">
        دسته بندی
      </button>
    </div>
  );
};

export default Filterbox;
