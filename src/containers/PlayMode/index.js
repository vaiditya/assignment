import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import PlayModeComponent from "../../components/PlayMode";
const PlayMode = ({ history }) => {
  //Selecting type as "AI" mode or "2 player" mode
  const onSelect = type => {
    history.push({ pathname: "/details", state: { type } });
  };
  return <PlayModeComponent onSelect={onSelect} />;
};

export default withRouter(PlayMode);
