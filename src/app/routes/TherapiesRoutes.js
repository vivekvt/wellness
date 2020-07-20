import React from "react";

import { Route } from "react-router-dom";
import data from "../../data";
import IVDrip from "../screens/IVDrip";

const IVDripRoutes = () => (
  <React.Fragment>
  <Route path="/ubi-therapy"
            component={() => <IVDrip data={data.therapies[1]} />}
          />
          <Route
            path="/ozone-therapy"
            component={() => <IVDrip data={data.therapies[2]} />}
          />
          <Route
            path="/ozone-therapy-uv-light"
            component={() => <IVDrip data={data.therapies[3]} />}
          />
 </React.Fragment>
);

export default IVDripRoutes;