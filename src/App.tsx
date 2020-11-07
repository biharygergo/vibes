import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  FeelingNowPage,
  LoadChartPage,
  RecordVibePage,
  VibeReceivedPage,
  VibesOverviewPage,
  ViewVibePage,
} from "./pages";
import { theme } from "./style";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: 'Poppins', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
