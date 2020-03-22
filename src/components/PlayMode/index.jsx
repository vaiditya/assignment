import React from "react";
import PlayModeStyle from "./styles";
import Cross from "../../assets/Cross.png";
import Zero from "../../assets/Zero.png";
const PlayMode = React.memo(({ onSelect }) => {
  return (
    <PlayModeStyle>
      <div className="container">
        <div className="logo">
          <div className="logo-container">
            <img src={Cross} alt="img" className="cross-logo" />
          </div>
          <div className="logo-container">
            <img src={Zero} alt="img" />
          </div>
        </div>
        <div className="content">
          <label className="verbase">
            <span>Choose your play mode</span>
          </label>
          <div className="btn-grp">
            <button className="btn btn-ai" onClick={() => onSelect("singles")}>
              With AI
            </button>
            <button
              className="btn btn-friend"
              onClick={() => onSelect("doubles")}
            >
              With a friend
            </button>
          </div>
        </div>
      </div>
    </PlayModeStyle>
  );
});

export default PlayMode;
