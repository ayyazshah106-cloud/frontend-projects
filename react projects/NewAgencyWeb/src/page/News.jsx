import React, { useEffect, useState } from "react";
import Wrapper from "../Components/Wrapper";
import Loader from "../Components/Loader";

import { useNewsContext } from "../context/NewsContext";

// main news page
const News = () => {
  // getting everything from context
  const { News, setNews, fetchNews, Loading } = useNewsContext();

  // fetch the default news once when page loads
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  // show loader while data is coming
  if (Loading) return <Loader className={"w-fit m-auto py-50 mb-10 "} />;
  return (
    <Wrapper>
      <div className="flex flex-wrap gap-5 justify-center">
        {News.map((news, index) => {
          // skip the news that has no image
          if (!news.urlToImage) return null;
          return <NewsCard key={index} NewsCards={news} />;
        })}
      </div>
    </Wrapper>
  );
};

// single news card
const NewsCard = ({ NewsCards }) => {
  // checking what data we get, remove later
  console.log(NewsCards.url);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {/* news image */}
      <figure>
        <img
          className="aspect-video object-cover"
          src={NewsCards?.urlToImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-1 mt-1 items-start ">
        {/* title, 2 lines max */}
        <h2 className="card-title line-clamp-2">{NewsCards?.title}</h2>
        {/* description, 3 lines max */}
        <p className="line-clamp-3">{NewsCards?.description}</p>
        <div className="card-actions justify-end ">
          {/* opens the full article in a new tab */}
          <button
            onClick={() => window.open(NewsCards?.url)}
            className="badge badge-outline px-3 py-4 border-white/40 cursor-pointer "
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default News;
