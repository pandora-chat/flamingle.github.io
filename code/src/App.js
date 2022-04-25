import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeOnePage from "./HomeOnePage";

function App() {
  return (
    <Router basename={"/"}>
      <HomeOnePage></HomeOnePage>
    </Router>
  );
}

export default App;
