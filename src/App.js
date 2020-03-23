import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import GameZone from "./containers/GameZone";
import FetchPlayers from "./containers/FetchPlayers";
import PlayMode from "./containers/PlayMode";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={PlayMode} />
        <Route exact path="/details" component={FetchPlayers} />
        <Route exact path="/game_zone" component={GameZone} />
        <Route component={() => <>No rotes found</>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
