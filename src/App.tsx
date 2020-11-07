import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  FeelingNowPage,
  LoadChartPage,
  RecordVibePage,
  VibeReceivedPage,
  VibesOverviewPage,
  ViewVibePage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/now">
            <FeelingNowPage />
          </Route>
          <Route path="/history">
            <LoadChartPage />
          </Route>
          <Route path="/record">
            <RecordVibePage />
          </Route>
          <Route path="/view">
            <ViewVibePage />
          </Route>
          <Route path="/received">
            <VibeReceivedPage />
          </Route>
          <Route path="/all">
            <VibesOverviewPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
