import React from "react";
import { MdAutoDelete } from "react-icons/md"; // Corrected import for MdAutoDelete

const SelectedPlayerCard = ({
  chosenPlayers,
  handleRemovePlayer,
  handleTogglePlayersView,
}) => {
  return (
    <div>
      {chosenPlayers.length === 0 ? (
        <div className="text-center my-10 text-gray-500">
          No players selected yet. Add some players to your squad.
        </div>
      ) : (
        chosenPlayers.map((player) => (
          <div key={player.playerId}>
            <div className="flex justify-between border-2 rounded-xl p-4 my-3">
              <div className="flex gap-5">
                <div>
                  <img
                    className="w-[90px] h-[90px] object-cover rounded-xl"
                    src={player.image}
                    alt={player.name}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{player.name}</h3>
                  <p className="text-gray-500">{player.role}</p>
                  <p className="text-gray-500">
                    <span className="text-black font-semibold">Price:</span> $
                    {player.biddingPrice}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRemovePlayer(player.playerId)}
                aria-label={`Delete ${player.name}`}
                className="text-red-500 text-2xl hover:text-red-700"
              >
                <MdAutoDelete />
              </button>
            </div>
          </div>
        ))
      )}

      <button
        onClick={() => handleTogglePlayersView(true)}
        className="btn bg-[#E7FE29] my-8 hover:bg-[#f2e05b]"
      >
        Add More Players
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
