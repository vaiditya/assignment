import React from "react";
import GameZoneStyle from "./styles";
import Cross from "../../assets/Cross.png";
import Zero from "../../assets/Zero.png";
const GameZone = React.memo(
  ({ details, score, positions, onSelect, onRevert, timer }) => {
    const {
      players: { player1, player2 },
      type
    } = details;
    const { p1Score, p2Score, turn } = score;
    return (
      <GameZoneStyle>
        <div className="container">
          <div className="score-container">
            <label className="p1-label">
              <span>{player1}</span>
            </label>
            <div className="score-card">{` ${p1Score} - ${p2Score} `}</div>
            <label className="p2-label">
              <span>{player2}</span>
            </label>
          </div>
          <label className="toast">
            {timer !== 0
              ? `Next game starts in ${timer} seconds...`
              : `${turn ? player1 : player2}'s X`}
          </label>
          <div className="content">
            {positions.map((position, index) => (
              <div className="cell" key={index}>
                <button
                  className="cell-button"
                  onClick={() => timer === 0 && onSelect(position.key)}
                >
                  {position.type.length > 0 && (
                    <img
                      src={position.type === "X" ? Cross : Zero}
                      alt="img"
                      className="logo"
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
          <div className="revert-container">
            {type === "doubles" && (
              <button className="revert" onClick={onRevert}>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/command-buttons/512/Undo-512.png"
                  alt="img"
                  className="logo"
                />
              </button>
            )}
          </div>
        </div>
      </GameZoneStyle>
    );
  }
);

export default GameZone;
