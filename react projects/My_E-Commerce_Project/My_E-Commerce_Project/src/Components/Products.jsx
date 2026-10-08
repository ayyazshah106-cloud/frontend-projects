import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <Loader className="py-30" />;
  return (
    <div className="grid grid-cols-5 w-full h-screen gap-4 p-6 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1">
      {" "}
      {products.map((item) => (
        <ProductCard key={item.id} items={item} />
      ))}{" "}
    </div>
  );
};
const ProductCard = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/Products/${items.id}`)}
      className="h-fit bg-gray-700 rounded-lg group cursor-pointer"
    >
      {" "}
      <img
        className="w-full aspect-square object-contain group-hover:scale-90 transition-all duration-400"
        src={items.thumbnail}
        alt={items.title}
      />{" "}
      <div className="p-5">
        {" "}
        <h1 className="text-xl line-clamp-1"> {items.title} </h1>{" "}
        <div className="flex items-center gap-3 py-3">
          {" "}
          <p className="bg-green-600 w-fit py-1 px-3 rounded-lg text-white text-xs flex items-center gap-1">
            {" "}
            <span>⭐</span> <span>{items.rating}</span>{" "}
          </p>{" "}
          <p>{items.stock} in stock</p>{" "}
        </div>{" "}
        <p className="text-xl text-white/70 font-medium">
          {" "}
          {items.price} Rs{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};
export default Products;
