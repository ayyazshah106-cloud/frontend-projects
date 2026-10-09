import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

// category buttons row (business, health etc)
const Catagory = () => {
  // only need these from context
  const { News, setNews, fetchNews } = useNewsContext();

  // runs when any category button is clicked
  const HandleClick = async (e) => {
    const cat = e.target.value; // button's value = category name
    if (!cat) return; // nothing to search, just stop
    // search news by that category
    const data = await fetchNews(`/everything?q=${cat}`);
    // update the main news list
    setNews(data.articles);
  };

  // list of all the categories we want buttons for
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
        {/* making one button for each category */}
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
