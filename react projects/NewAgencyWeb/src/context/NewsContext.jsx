import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [News, setNews] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fetchNews = async (url = "/everything?q=pakistan") => {
    setLoading(true);
    try {
      const responce = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
      );
      setLoading(false);
      return responce.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const value = {
    News,
    setNews,
    fetchNews,
    Loading,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { useNewsContext, NewsContextProvider };
