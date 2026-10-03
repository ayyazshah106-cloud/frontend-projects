import React from "react";
import Wrapper from "./Wrapper";
const Catagory = () => {
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
      <div className="flex justify-center gap-2">
        {catagoreis.map((catagory) => {
          return (
            <div key={catagory} className="py-4">
              <button className="btn btn-primary">{catagory}</button>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Catagory;
