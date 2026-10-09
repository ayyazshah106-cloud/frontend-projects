import React, { useEffect, useRef, useState } from "react";

import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";
import Cards from "./Cards";

// outside the component so it doesnt reset on every render
let debouncing = null;

const NavBar = () => {
  // news for the sidebar (top headlines)
  const [sideDetails, setsideDetails] = useState([]);
  // grabbing these from context
  const { setNews, fetchNews } = useNewsContext();

  // runs when user types in the search box
  const handleClick = (e) => {
    const inputValue = e.target.value;

    // previous timeout ko clear kar raha hoon
    clearTimeout(debouncing);

    // agar input empty hai to function yahan se return ho jayega
    if (!inputValue) return;

    // 1 second wait karega phir API call hogi
    debouncing = setTimeout(async () => {
      // search news with whatever user typed
      const data = await fetchNews(`/everything?q=${inputValue}`);

      // update the main news list
      setNews(data.articles);
    }, 1000);
  };

  // refs to touch the sidebar and close button directly
  const sidebar = useRef();
  const Close = useRef();

  // opens the sidebar
  const handleSlideBar = () => {
    if (sidebar.current) {
      sidebar.current.style.display = "inline";
    }
  };

  // closes the sidebar (x button)
  const closeSideBar = () => {
    if (Close.current) {
      sidebar.current.style.display = "none";
    }
  };

  // close sidebar if user clicks on the dark area outside
  const modal = (e) => {
    if (e.target === sidebar.current) {
      sidebar.current.style.display = "none";
    }
  };

  // load top headlines once when page opens
  useEffect(() => {
    (async () => {
      const data = await fetchNews("top-headlines?country=us&pageSize=20");
      setsideDetails(data.articles);
    })();
  }, []);

  return (
    <div className="bg-base-200 my-4">
      <Wrapper>
        <div className="navbar shadow-sm ">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>

          {/* search box */}
          <div className="flex gap-2">
            <input
              onChange={handleClick}
              type="text"
              placeholder="Search"
              className="input w-24 md:w-auto"
            />
          </div>

          {/* bell button, opens the sidebar */}
          <button
            onClick={handleSlideBar}
            className=" btn btn-ghost btn-circle"
          >
            <div className="indicator z-100 ">
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

              {/* small badge with the count */}
              <span className="badge badge-xs badge-primary indicator-item">
                {sideDetails.length + 1}
              </span>
            </div>
          </button>
        </div>
      </Wrapper>

      {/* sidebar, hidden by default. dark bg covers the full screen */}
      <div
        onClick={modal}
        ref={sidebar}
        className=" bg-black/70 hidden w-full h-screen fixed top-0 right-0 z-50 "
      >
        <div className="  w-3/5 flex flex-col flex-wrap gap-[18]  bg-[#191919] absolute top-0 right-0">
          {/* close button */}
          <button
            onClick={closeSideBar}
            ref={Close}
            className="w-full text-left p-5  cursor-pointer text-3xl"
          >
            x
          </button>

          {/* news cards list */}
          <div className="w-full flex flex-wrap gap-3 justify-center items-center overflow-y-auto h-screen">
            {sideDetails?.map((newsSideBar, index) =>
              // skip the news that has no image
              !newsSideBar.urlToImage ? null : (
                <Cards
                  key={index}
                  details={newsSideBar}
                  onImageError={() => {
                    // image failed to load so remove this card from the list
                    setsideDetails((prev) =>
                      prev.filter((_, i) => i !== index),
                    );
                  }}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
