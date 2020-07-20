import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

import data from "./data";
import NavC from "./app/components/Nav";
import Home from "./app/screens/Home";
import IVDrip from "./app/screens/IVDrip";
import IVDripRoutes from "./app/routes/IVDripRoutes";
import TherapiesRoutes from "./app/routes/TherapiesRoutes";
import OtherServicesRoutes from "./app/routes/OtherServicesRoutes";

function App() {
  return (
    <Router>
      <div>
        <NavC />
        <div className="container">
          <Route exact path="/" component={Home} />
          <IVDripRoutes/>
          <TherapiesRoutes/>
          <OtherServicesRoutes/>
  <Route path="/the-beverly-hills-wellness-center-team" component={() => <IVDrip data={data.team[1]} />} />
        </div>
      </div>
    </Router>
  );
}

export default App;
