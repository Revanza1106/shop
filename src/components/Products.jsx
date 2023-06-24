import React, { useState } from "react";
import { data } from "../Data/Data";

const Products = () => {
  // console.log(data);
  const [foods, setFoods] = useState(data);

  // Fillter System
  const filterType=(category)=>{
    setFoods(
      data.filter((item) =>{
        return item.category === category;
      })
      );
  }

  // Filter Price

  const FilterPrice = (Price) =>{
    setFoods(
      data.filter((item) =>{
        return item.price === Price;
      })
    );
  }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-green-500 font-bold text-4xl text-center">
        Top Products
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={() => setFoods(data)} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              All
            </button>
            <button onClick={() => filterType('Fish')} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
             Fish
            </button>
            <button onClick={() => filterType('Poultry')} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
            poultry
            </button>
            <button onClick={(() => filterType ('Vegetabeles'))} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              Vegetabeles
            </button>
            <button onClick={() => filterType('Eggs')} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              Eggs
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={() => FilterPrice('$')} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              $
            </button>
            <button onClick={() => FilterPrice('$$')} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              $$
            </button>
            <button onClick={() => FilterPrice('$$$')} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              $$$
            </button>
            <button onClick={() => FilterPrice('$$$$')} className="m-1 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display Products */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {
          (foods.
          map((item, index) => (
            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
              <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-green-500 text-black rounded-full p-1">{item.price}</span>
                </p>
              </div>
            </div>
          )))
        }
      </div>
    </div>
  );
};

export default Products;
