import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  FeelingNowPage,
  LoadChartPage,
  RecordVibePage,
  ShareVibePage,
  ShareVibeSelectPage,
  VibeReceivedPage,
  VibesOverviewPage,
  ViewVibePage,
} from "./pages";
import { theme } from "./style";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
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
            <Route path="/share/select">
              <ShareVibeSelectPage />
            </Route>
            <Route path="/share">
              <ShareVibePage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
