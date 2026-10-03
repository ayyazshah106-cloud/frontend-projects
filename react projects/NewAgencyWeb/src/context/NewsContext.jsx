import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const fetchNews = async () => {
    const responce = await api.get(
      `/everything?q=bitcoin&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
    );
    console.log(responce);
  };

  const [News, setNews] = useState([]);
  const value = {
    News,
    setNews,
    fetchNews,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { useNewsContext, NewsContextProvider };
