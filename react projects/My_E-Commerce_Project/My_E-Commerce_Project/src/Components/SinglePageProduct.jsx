import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import React, { useEffect, useState } from "react";

const SinglePageProduct = () => {
  const { id } = useParams();

  const [Products, setproducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  console.log(Products);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios(`https://fakestoreapi.com/products/${id}`);

    setproducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (Loading) return <Loader className={"py-30"} />;

  // console.log(id);
  return (
    <div className="bg-[#12151C] min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="relative bg-[#1A1D24] border border-[#2D333F] rounded-3xl p-6 sm:p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 shadow-[0_0_35px_rgba(255,165,0,0.12)]">
        <div className="relative w-full md:w-1/2 aspect-square bg-[#222630] border border-white/5 rounded-2xl flex items-center justify-center p-6 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-slate-800/20 to-transparent blur-xl pointer-events-none"></div>

          <img
            className="max-h-[300px] w-auto object-contain group-hover:scale-95 transition-all duration-300 drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] cursor-pointer relative z-10"
            src={Products?.image}
            alt={Products?.title || "Product"}
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start gap-3">
          <h1 className="text-2xl sm:text-3xl font-medium text-white line-clamp-2 leading-snug">
            {Products?.title}
          </h1>

          <div className="flex items-center gap-3 my-1">
            <p className="bg-[#48C774] px-2.5 py-1 rounded-lg text-white text-xs font-semibold flex items-center gap-1 shadow-sm">
              <span>⭐</span>
              <span>{Products?.rating?.rate}</span>
            </p>
            <span className="text-sm text-[#A1A7B5] font-normal">
              {Products?.rating?.count}
            </span>
          </div>

          <p className="text-2xl sm:text-3xl font-bold text-white">
            {Products?.price}{" "}
            <span className="text-lg font-normal text-slate-300">Rs</span>
          </p>

          <p className="text-sm text-[#A1A7B5] font-normal leading-relaxed text-justify max-w-[420px] line-clamp-4">
            {Products?.description}
          </p>

          <div className="flex items-center gap-4 mt-4 w-full">
            <div className="flex items-center border border-[#A1A7B5]/30 bg-[#222630] rounded-xl p-1 shrink-0">
              <button
                type="button"
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-bold text-xl"
              >
                -
              </button>
              <span className="px-4 font-semibold text-white text-base">1</span>
              <button
                type="button"
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-bold text-xl"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all duration-200 text-center"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageProduct;
