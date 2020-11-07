import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  FeelingNowPage,
  LoadChartPage,
  RecordSuccessPage,
  RecordVibePage,
  ShareVibePage,
  ShareVibeSelectPage,
  VibeReceivedPage,
  VibesOverviewPage,
  ViewVibePage,
} from "./pages";
import { theme } from "./style";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    min-height: 100%;
    overflow: hidden;
  }
`;

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
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
            <Route path="/record/success">
              <RecordSuccessPage />
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
            <Route exact path="/">
              <Redirect to="/now" />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
