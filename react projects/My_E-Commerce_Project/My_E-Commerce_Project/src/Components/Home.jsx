import React from "react";

const Home = () => {
  return (
    <div className="bg-[#12151C] min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-8 font-sans overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-4 sm:gap-6">
          <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs px-3 py-1.5 rounded-full font-medium tracking-wide">
            NEW ARRIVALS
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Upgrade Your Style With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Premium Trends
            </span>
          </h1>

          <p className="text-[#A1A7B5] text-sm sm:text-base leading-relaxed max-w-lg">
            Discover our latest collection of modern apparel designed for
            comfort and everyday fashion. Exclusive deals available now.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-200">
              Shop Now
            </button>
            <button className="border border-[#2D333F] text-white hover:bg-white/5 font-semibold px-5 sm:px-6 py-3 rounded-xl transition-all duration-200">
              Explore Collections
            </button>
          </div>
        </div>

        {/* Right Side: Image Card Container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative bg-[#1A1D24] border border-[#2D333F] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[0_0_40px_rgba(255,165,0,0.12)] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-transparent blur-xl pointer-events-none"></div>

            {/* Product Image Tag */}
            <div className="w-full h-64 sm:h-80 flex items-center justify-center relative z-10">
              <img
                // Step 2: Import ki hui pic yahan lagayein (e.g., src={heroImg})
                // Ya direct image ka path/URL likhein
                src="src\assets\tshirt.svg"
                alt="Casual Slim Fit"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="mt-6 pt-4 border-t border-[#2D333F] flex justify-between items-center relative z-10">
              <div>
                <p className="text-xs text-[#A1A7B5]">Featured Product</p>
                <p className="text-white font-semibold text-base sm:text-lg">
                  Casual Slim Fit
                </p>
              </div>
              <p className="text-orange-400 font-bold text-lg sm:text-xl">
                15.99 Rs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
