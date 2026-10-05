import React from "react";

// single news card, gets the article as "details" prop
const Cards = ({ details }) => {
  // if the image doesnt load, put a placeholder instead
  const onImageError = (e) => {
    e.currentTarget.onerror = null; // infinite loop se bachne ke liye
    e.currentTarget.src = "https://placehold.co/400x250?text=No+Image";
  };

  return (
    <div className="z-50">
      <div className="card card-sm bg-base-100 w-45 shadow-sm">
        {/* news image */}
        <figure>
          <img
            className="aspect-video object-cover "
            src={details?.urlToImage}
            alt={details?.title}
            referrerPolicy="no-referrer" // some sites block images without this
            onError={onImageError}
          />
        </figure>
        <div className="card-body">
          {/* title, only 2 lines max */}
          <h2 className="card-title line-clamp-2">{details?.title}</h2>
          {/* description, only 3 lines max */}
          <p className="line-clamp-3">{details?.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => window.open(details?.url)}
              className="badge badge-outline px-3 py-4 border-white/40 cursor-pointer "
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
