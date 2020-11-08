import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
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
    height: 100%;
    overflow: hidden;
  }


    @media only screen and (min-width: 768px) {
      #root {
        width: 400px;
        height: 80vh;
        max-height: 800px;
        border: 2px solid #d3d3d3;
        border-radius: 30px;
        padding: 10px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        margin-top: 30px;
        box-shadow: ${theme.boxShadow};
      }
    }
  
`;

const ResponsiveDisclaimer = styled.h6`
  color: ${(props) => props.theme.lightText};
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 10px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    display: none;
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
        <ResponsiveDisclaimer>
          Maybe you should open this from your phone instead...
        </ResponsiveDisclaimer>
      </ThemeProvider>
    </div>
  );
}

export default App;
