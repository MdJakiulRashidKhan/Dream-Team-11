import React from "react";

const Players = ({
  handleTogglePlayersView,
  isAvailablePlayers,
  chosenPlayersCount,
}) => {
  return (
    <div className="flex justify-between md:items-center my-8 p-1">
      <div>
        <h1 className="text-2xl font-bold">
          {isAvailablePlayers
            ? "Available Players"
            : `Selected Players (${chosenPlayersCount || 0}/6)`}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row space-x-3 space-y-2 md:space-y-0">
        <button
          onClick={() => handleTogglePlayersView(true)}
          className={`btn px-6 py-2 rounded-lg text-Black transition-colors duration-300 ${
            isAvailablePlayers ? "bg-[#E7FE29]" : "bg-gray-300"
          } hover:bg-[#d4d519]`}
          aria-label="View Available Players"
        >
          Available
        </button>
        <button
          onClick={() => handleTogglePlayersView(false)}
          className={`btn px-6 py-2 rounded-lg text-black transition-colors duration-300 ${
            !isAvailablePlayers ? "bg-[#E7FE29]" : "bg-gray-300"
          } hover:bg-[#d4d519]`}
          aria-label="View Selected Players"
        >
          Selected ({chosenPlayersCount || 0})
        </button>
      </div>
    </div>
  );
};

export default Players;
