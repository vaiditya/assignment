import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import FetchPlayersComponent from "../../components/FetchPlayers";
/**
 * @param {*} { history }
 * @returns Fetch Player component
 */
const FetchPlayers = ({ history }) => {
  // Initializing player details
  const [details, setDetails] = useState({
    player1: "Player 1",
    player2: "Player 2",
    type: history.location.state.type
  });
  const [selected, setSelected] = useState("X");

  const changeDetails = (key, value) => {
    setDetails({ ...details, [key]: value });
  };

  const startGame = () => {
    let { player1, player2, type } = details;

    // Checks for "AI" mode
    if (type === "singles") {
      if (player1 === "AI") player1 = "AI(user)";
      if (player2 === "AI") player2 = "AI(user)";
      if (selected === "X") player2 = "AI";
      else if (selected === "O") player1 = "AI";
    } else {
      if (!player1) player1 = "Player 1";
      if (!player2) player2 = "Player 2";
    }

    history.push({
      pathname: "/game_zone",
      state: { type, players: { player1, player2 } }
    });
  };
  const onSelect = type => {
    setSelected(type);
  };
  return (
    <>
      <FetchPlayersComponent
        details={details}
        changeDetails={changeDetails}
        startGame={startGame}
        selected={selected}
        onSelect={onSelect}
      />
    </>
  );
};

export default withRouter(FetchPlayers);
