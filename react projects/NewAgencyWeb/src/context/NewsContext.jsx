import { createContext, useContext, useState } from "react";
import api from "../config/axios"; // axios instance, base url is set there
import axios from "axios";

// context to share news stuff across the app
const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  // list of news + loading flag
  const [News, setNews] = useState([]);
  const [Loading, setLoading] = useState(false);

  // gets news from the api, default is pakistan news
  const fetchNews = async (url = "/everything?q=pakistan") => {
    setLoading(true); // start loader
    try {
      // adding the api key at the end of the url
      const responce = await axios(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=711997fc5820448cb47d57da4a35bfc2",
      );
      setLoading(false); // got the data, stop loader
      return responce.data; // send data back to whoever called this
    } catch (error) {
      console.log(error); // just logging the error for now
      setLoading(false); // stop loader even if it fails
    }
  };

  // stuff we want to use in other components
  const value = {
    News,
    setNews,
    fetchNews,
    Loading,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

// custom hook so we dont have to write useContext(NewsContext) every time
const useNewsContext = () => {
  return useContext(NewsContext);
};

export { useNewsContext, NewsContextProvider };
