import React from "react";
import BannerMain from "/images/banner-main.png";
import BannerImage from "/images/bg-shadow.png";

const Banner = ({ showSuccessNotification, handleAddCredits }) => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center bg-no-repeat rounded-2xl mt-8 overflow-hidden flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      <div className="relative z-10 text-center text-white px-6">
        <img src={BannerMain} className="w-44 mx-auto mb-6" alt="Banner Main" />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Beyond Boundaries, Beyond Limits
        </p>

        <button
          onClick={() => {
            handleAddCredits();
            showSuccessNotification("Credit added To Your Wallet");
          }}
          className="px-6 py-3 bg-[#E7FE29] text-black font-semibold rounded shadow-lg hover:bg-[#e5f741] transition duration-300"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
