import React from "react";
import FetchPlayersStyle from "./styles";
import Cross from "../../assets/Cross.png";
import Zero from "../../assets/Zero.png";
const FetchPlayers = React.memo(
  ({ details, changeDetails, startGame, selected, onSelect }) => {
    console.log(details.type);
    return (
      <FetchPlayersStyle>
        <div className="container">
          <label className="verbase">
            <span>Pick your sides</span>
          </label>
          <div className="content">
            <div
              className={`name-container ${
                details.type === "singles" ? selected === "O" && "div-blur" : ""
              }`}
              onClick={() =>
                details.type === "singles" && selected === "O" && onSelect("X")
              }
            >
              <div className="logo">
                <img src={Cross} alt="img" />
              </div>
              <input
                name="player1"
                value={details.player1}
                onChange={e => changeDetails(e.target.name, e.target.value)}
                placeholder="Player 1"
              />
            </div>
            <div
              className={`name-container ${
                details.type === "singles" ? selected === "X" && "div-blur" : ""
              }`}
              onClick={() =>
                details.type === "singles" && selected === "X" && onSelect("O")
              }
            >
              <div className="logo">
                <img src={Zero} alt="img" />
              </div>
              <input
                className={`name-container ${
                  details.type === "singles"
                    ? selected === "X" && "input-blur"
                    : ""
                }`}
                name="player2"
                value={details.player2}
                onChange={e => changeDetails(e.target.name, e.target.value)}
                placeholder="Player 2"
              />
            </div>
          </div>
          <div className="btn-container">
            <button className="btn" onClick={startGame}>
              Continue
            </button>
          </div>
        </div>
      </FetchPlayersStyle>
    );
  }
);

export default FetchPlayers;
