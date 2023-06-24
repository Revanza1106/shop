import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      {/* cards */}
      <div className="rounded-xl relative ">
        {/* overly */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Chicken Chest</p>
          <p className="px-2">Fresh From Our Farm</p>
          <button className="border-white bg-white text-black hover:bg-green-500 hover:border-green-500  mx-2 absolute bottom-4">Buy Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
         {/* cards */}
         <div className="rounded-xl relative ">
        {/* overly */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Fresh Meat</p>
          <p className="px-2">Tuban Meat </p>
          <button className="border-white bg-white text-black hover:bg-green-500 hover:border-green-500  mx-2 absolute bottom-4">Buy Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/16375370/pexels-photo-16375370/free-photo-of-makanan-daging-mentah-fotografi-makanan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
         {/* cards */}
         <div className="rounded-xl relative ">
        {/* overly */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Kembung Fish</p>
          <p className="px-2">From Pelabuhan Ratu</p>
          <button className="border-white bg-white text-black hover:bg-green-500 hover:border-green-500  mx-2 absolute bottom-4">Buy Now</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/15201054/pexels-photo-15201054/free-photo-of-hewan-ikan-fotografi-binatang-makanan-laut.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  );
};

export default HeadlineCards;
