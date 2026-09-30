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
    <div className="bg-gray-700 rounded-lg group">
      <img
        className="aspect-square object-contain group-hover:scale-90 transition-all duration-400 hover:cursor-pointer "
        src={Products?.image}
        alt=""
      />
      <div className="p-5">
        <h1 className="text-xl line-clamp-2"> {Products?.title}</h1>

        <div className="flex items-center gap-3 py-3">
          <p className="bg-green-600 w-fit py-1 -px-0 px-3 rounded-lg text-white text-xs flex items-center justify-items-start">
            <span>⭐</span>
            <span>{Products?.rating?.rate}</span>
          </p>
          <p>{Products?.rating?.count}</p>
        </div>
        <p className="text-xl text-white/70 font-medium">
          {Products?.price} Rs
        </p>
      </div>
    </div>
  );
};

export default SinglePageProduct;
