import React, { useRef } from "react";

import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

let debouncing = null;

const NavBar = () => {
  const { News, setNews, fetchNews } = useNewsContext();

  const handleClick = (e) => {
    const inputValue = e.target.value;

    // previous timeout ko clear kar raha hoon
    clearTimeout(debouncing);

    // agar input empty hai to function yahan se return ho jayega
    if (!inputValue) return;

    // 1 second wait karega phir API call hogi
    debouncing = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${inputValue}`);

      setNews(data.articles);
    }, 1000);
  };
  const sidebar = useRef();
  const Close = useRef();
  // side bar data
  const HandleClick = async () => {
    const data = await fetchNews(`/everything?q=${popular}`);
    setNews(data.articles);
  };

  const HandleSlideBar = () => {
    if (sidebar.current) {
      sidebar.current.style.display = "inline";
      HandleClick();
    }
  };
  const closeSideBar = () => {
    if (Close.current) {
      sidebar.current.style.display = "none";
    }
  };
  const modal = (e) => {
    if (e.target === sidebar.current) {
      sidebar.current.style.display = "none";
    }
  };

  return (
    <div className="bg-base-200 my-4">
      <Wrapper>
        <div className="navbar shadow-sm ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>

          <div className="flex gap-2">
            <input
              onChange={handleClick}
              type="text"
              placeholder="Search"
              className="input w-24 md:w-auto"
            />
          </div>

          <button
            onClick={HandleSlideBar}
            className="z-10 btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                aria-label="Notifications"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </Wrapper>

      <div
        onClick={modal}
        ref={sidebar}
        className=" hidden w-full h-screen bg-tranperent fixed top-0 right-0"
      >
        <div className="w-3/5 h-screen bg-[#191919] absolute top-0 right-0 grid grid-rows-2 justify-center items-center ">
          <button
            onClick={closeSideBar}
            ref={Close}
            className=" p-5 absolute top-0 left-0  cursor-pointer text-3xl"
          >
            x
          </button>
          {News.map((news, index) => {
            <div className="card-sm">
              <div className="base-100 w-96 shadow-sm">
                <figure>
                  <img src={News?.urlToImage} alt="Shoes" />
                </figure>
                <div className="card-body p-1 mt-1 items-start ">
                  <h2 className="card-title">{News?.title}</h2>
                  <p>{NewsCards?.description}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => window.open(News.url)}
                      className="badge badge-outline px-3 py-4 border-white/40 cursor-pointer "
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
