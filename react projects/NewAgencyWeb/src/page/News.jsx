import React, { useEffect } from "react";
import Wrapper from "../Components/Wrapper";
import api from "../config/axios";
import { useNewsContext } from "../context/NewsContext";

const News = () => {
  const state = useNewsContext();
  console.log(state);

  useEffect(() => {
    // state.fetchNews();
  }, []);
  return (
    <Wrapper>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
