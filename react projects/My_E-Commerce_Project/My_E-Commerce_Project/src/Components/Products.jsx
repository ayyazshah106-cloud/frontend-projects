import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const Products = () => {
  const [Products, setproducts] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await axios(`https://fakestoreapi.com/products`);
    setproducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (Loading) return <Loader className={"py-30"} />;

  return (
    <div className="grid grid-cols-5 gap-4 p-6 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[400px]:grid-cols-1  ">
      {Products.map((items) => {
        return <ProductCard key={items.id} items={items} />;
      })}
    </div>
  );
};
const ProductCard = ({ items }) => {
  return (
    <div className="bg-gray-700 rounded-lg ">
      <img className="aspect-square object-contain " src={items.image} alt="" />
      <div className="p-5">
        <h1 className="text-xl line-clamp-2"> {items.title}</h1>

        <div className="flex items-center gap-3 py-3">
          <p className="bg-green-600 w-fit py-1 -px-0 px-3 rounded-lg text-white text-xs flex items-center justify-items-start">
            <span>⭐</span>
            <span>{items.rating.rate}</span>
          </p>
          <p>{items.rating.count}</p>
        </div>
        <p className="text-xl text-white/70 font-medium">{items.price} Rs</p>
      </div>
    </div>
  );
};

export default Products;
