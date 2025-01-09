import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PlayerCards from "./components/PlayerCards";
import Players from "./components/Players";
import SelectedPlayerCard from "./components/SelectedPlayerCard";

const App = () => {
  const [isAvailablePlayers, setIsAvailablePlayers] = useState(true);
  const [chosenPlayers, setChosenPlayers] = useState([]);
  const [credits, setCredits] = useState(0);

  // Toggles the view between available players and selected players
  const handleTogglePlayersView = (status) => setIsAvailablePlayers(status);

  // Adds a player to the squad
  const handleAddPlayer = (player) => {
    if (credits < player.biddingPrice) {
      return showErrorNotification(
        "You don't have enough credit to buy this player. Claim more credits!"
      );
    }

    // Checks if the player is already chosen or the squad is full (max 6 players)
    const isPlayerAlreadyChosen = chosenPlayers.some(
      (p) => p.playerId === player.playerId
    );
    const selectedPlayerCount = chosenPlayers.length;

    if (!isPlayerAlreadyChosen && selectedPlayerCount < 6) {
      // Adds player to the selected list
      setChosenPlayers((prev) => [...prev, player]);
      setCredits((prev) => prev - player.biddingPrice);
      showSuccessNotification(`${player.name} is now in your squad! 🥳`);
    } else if (selectedPlayerCount >= 6) {
      showErrorNotification("You can only add 6 players.");
    } else {
      showErrorNotification("This player is already in your selected squad.");
    }
  };

  // Removes a player from the squad
  const handleRemovePlayer = (playerId) => {
    const playerToRemove = chosenPlayers.find((p) => p.playerId === playerId);
    setChosenPlayers((prev) =>
      prev.filter((player) => player.playerId !== playerId)
    );

    toast.warn(`${playerToRemove.name} removed from your squad.`, {
      position: "top-right",
      autoClose: 5000,
      theme: "light",
    });
  };

  // Adds credits to the balance
  const handleAddCredits = () => {
    setCredits((prev) => prev + 20000000); // Adjust credit addition value as needed
  };

  // Utility function for showing success notifications
  const showSuccessNotification = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      theme: "light",
    });
  };

  // Utility function for showing error notifications
  const showErrorNotification = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      theme: "light",
    });
  };

  return (
    <div className="w-full space-y-60">
      <div className="container mx-auto">
        <Navbar credits={credits} />
        <Banner
          handleAddCredits={handleAddCredits}
          showSuccessNotification={showSuccessNotification}
        />
        <Players
          isAvailablePlayers={isAvailablePlayers}
          handleTogglePlayersView={handleTogglePlayersView}
          chosenPlayersCount={chosenPlayers.length}
        />
        {isAvailablePlayers ? (
          <PlayerCards handleAddPlayer={handleAddPlayer} />
        ) : (
          <SelectedPlayerCard
            chosenPlayers={chosenPlayers}
            handleRemovePlayer={handleRemovePlayer}
            handleTogglePlayersView={handleTogglePlayersView}
          />
        )}
      </div>
      <div className="pt-8">
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
