import React, { useEffect, useState } from "react";
import Wrapper from "../Components/Wrapper";
import Loader from "../Components/Loader";

import { useNewsContext } from "../context/NewsContext";

const News = () => {
  const { News, setNews, fetchNews, Loading } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  if (Loading) return <Loader className={"w-fit m-auto py-32 mb-10"} />;
  return (
    <Wrapper>
      <div className="flex flex-wrap gap-5">
        {News.map((news, index) => {
          if (!news.urlToImage) return null;
          return <NewsCard key={index} NewsCards={new} />;
        })}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ NewsCards }) => {
  console.log(NewsCards);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={NewsCards?.urlToImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{NewsCards?.title}</h2>
        <p>{NewsCards?.description}</p>
        <div className="card-actions justify-end">
          <button
            onChange={() => window.open(NewsCard.url)}
            className="btn btn-primary"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default News;
