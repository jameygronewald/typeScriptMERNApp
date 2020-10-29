import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "./views/LandingPage";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
