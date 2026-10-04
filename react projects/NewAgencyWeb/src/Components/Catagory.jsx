import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";
const Catagory = () => {
  const { News, setNews, fetchNews } = useNewsContext();

  const HandleClick = async (e) => {
    const cat = e.target.value;
    if (!cat) return;
    const data = await fetchNews(`/everything?q=${cat}`);
    setNews(data.articles);
  };
  const catagoreis = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sport",
    "technology",
  ];

  return (
    <Wrapper>
      <div className="flex justify-center gap-4">
        {catagoreis.map((catagory) => {
          return (
            <div key={catagory} className="py-8">
              <button
                onClick={HandleClick}
                value={catagory}
                className="btn btn-primary"
              >
                {catagory}
              </button>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Catagory;
