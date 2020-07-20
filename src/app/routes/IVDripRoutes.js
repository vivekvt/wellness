import React from "react";
import { Route } from "react-router-dom";
import data from "../../data";
import IVDrip from "../screens/IVDrip";

const IVDripRoutes = () => (
 <React.Fragment>
  <Route
            path="/vitamin-c"
            component={() => <IVDrip data={data.ivdrip[1]} />}
          />
          <Route
            path="/immune-booster"
            component={() => <IVDrip data={data.ivdrip[2]} />}
          />
          <Route
            path="/glutathione"
            component={() => <IVDrip data={data.ivdrip[3]} />}
          />
           <Route
            path="/anti-aging"
            component={() => <IVDrip data={data.ivdrip[4]} />}
          />
          <Route
            
            path="/weight-management"
            component={() => <IVDrip data={data.ivdrip[5]} />}
          />
          <Route
            
            path="/jet-lag"
            component={() => <IVDrip data={data.ivdrip[6]} />}
          />
           <Route
            
            path="/hangover"
            component={() => <IVDrip data={data.ivdrip[7]} />}
          />
          <Route
            
            path="/pms"
            component={() => <IVDrip data={data.ivdrip[8]} />}
          />
 </React.Fragment>
);

export default IVDripRoutes;