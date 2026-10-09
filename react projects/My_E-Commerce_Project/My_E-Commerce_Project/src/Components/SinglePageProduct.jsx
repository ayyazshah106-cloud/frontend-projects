import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import React, { useEffect, useState } from "react";
const SinglePageProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  if (loading) return <Loader className="py-30" />;
  return (
    <div className="bg-[#12151C] min-h-screen flex items-center justify-center p-4 sm:p-8 font-sans">
      {" "}
      <div className="relative bg-[#1A1D24] border border-[#2D333F] rounded-3xl p-6 sm:p-8 max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 shadow-[0_0_35px_rgba(255,165,0,0.12)]">
        {" "}
        {/* Product Image */}{" "}
        <div className="relative w-full md:w-1/2 aspect-square bg-[#222630] border border-white/5 rounded-2xl flex items-center justify-center p-6 overflow-hidden group">
          {" "}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-slate-800/20 to-transparent blur-xl pointer-events-none"></div>{" "}
          <img
            className="max-h-[300px] w-auto object-contain group-hover:scale-95 transition-all duration-300 drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] cursor-pointer relative z-10"
            src={product?.thumbnail}
            alt={product?.title || "Product"}
          />{" "}
        </div>{" "}
        {/* Product Details */}{" "}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-3">
          {" "}
          {/* Title */}{" "}
          <h1 className="text-2xl sm:text-3xl font-medium text-white line-clamp-2 leading-snug">
            {" "}
            {product?.title}{" "}
          </h1>{" "}
          {/* Rating */}{" "}
          <div className="flex items-center gap-3 my-1">
            {" "}
            <p className="bg-[#48C774] px-2.5 py-1 rounded-lg text-white text-xs font-semibold flex items-center gap-1 shadow-sm">
              {" "}
              <span>⭐</span> <span>{product?.rating}</span>{" "}
            </p>{" "}
            <span className="text-sm text-[#A1A7B5] font-normal">
              {" "}
              {product?.reviews?.length || 0} Reviews{" "}
            </span>{" "}
          </div>{" "}
          {/* Price */}{" "}
          <p className="text-2xl sm:text-3xl font-bold text-white">
            {" "}
            {product?.price}{" "}
            <span className="text-lg font-normal text-slate-300">
              {" "}
              Rs{" "}
            </span>{" "}
          </p>{" "}
          {/* Discount */}{" "}
          {product?.discountPercentage && (
            <p className="text-sm text-green-400">
              {" "}
              {product.discountPercentage}% OFF{" "}
            </p>
          )}{" "}
          {/* Description */}{" "}
          <p className="text-sm text-[#A1A7B5] font-normal leading-relaxed text-justify max-w-[420px] line-clamp-4">
            {" "}
            {product?.description}{" "}
          </p>{" "}
          {/* Stock */}{" "}
          <p className="text-sm text-slate-400">
            {" "}
            Stock:{" "}
            <span className="text-white font-semibold">
              {" "}
              {product?.stock}{" "}
            </span>{" "}
          </p>{" "}
          {/* Quantity + Cart */}{" "}
          <div className="flex items-center gap-4 mt-4 w-full">
            {" "}
            {/* Quantity */}{" "}
            <div className="flex items-center border border-[#A1A7B5]/30 bg-[#222630] rounded-xl p-1 shrink-0">
              {" "}
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-bold text-xl"
              >
                {" "}
                -{" "}
              </button>{" "}
              <span className="px-4 font-semibold text-white text-base">
                {" "}
                {quantity}{" "}
              </span>{" "}
              <button
                type="button"
                onClick={() =>
                  setQuantity((prev) => Math.min(product?.stock || 1, prev + 1))
                }
                className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-bold text-xl"
              >
                {" "}
                +{" "}
              </button>{" "}
            </div>{" "}
            {/* Add To Cart */}{" "}
            <button
              type="button"
              className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all duration-200 text-center"
            >
              {" "}
              Add to Cart{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default SinglePageProduct;
