import React, { useEffect, useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa"; // Fixed the FaFlag import

const PlayerCards = ({ handleAddPlayer }) => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("player.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch players data");
        }
        return res.json();
      })
      .then((data) => setPlayers(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div className="text-center text-red-500 my-10">Error: {error}</div>;
  }

  return (
    <div className="my-10 mx-auto">
      <div className="grid grid-cols-1 w-full mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.length > 0 ? (
          players.map((player) => (
            <div
              key={player.playerId}
              className="card bg-base-100 shadow-xl border-2 p-4 space-y-2"
            >
              <figure>
                <img
                  className="w-full h-96 rounded-2xl object-cover"
                  src={player.image}
                  alt={player.name}
                />
              </figure>
              <div className="mt-6 space-y-2">
                <div className="flex gap-4 text-xl items-center">
                  <FaUser />
                  <h4 className="font-semibold">{player.name}</h4>
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaFlag className="text-gray-400" />
                    <h6 className="text-gray-500">{player.country}</h6>
                  </div>
                  <h5 className="bg-gray-100 px-3 py-1 rounded-xl">
                    {player.role}
                  </h5>
                </div>

                <hr className="my-6" />

                <h4 className="text-lg font-semibold">Rating</h4>

                <div className="flex items-center justify-between">
                  <h5 className="font-semibold">
                    {player.battingType || "N/A"}
                  </h5>
                  <h5 className="text-gray-500">
                    {player.bowlingType || "N/A"}
                  </h5>
                </div>

                <div className="flex items-center justify-between">
                  <div className="font-semibold">
                    Price: ${player.biddingPrice}
                  </div>
                  <button
                    onClick={() => handleAddPlayer(player)}
                    className="btn border px-3 py-1 rounded-xl"
                  >
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 my-10">
            No players available
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerCards;
