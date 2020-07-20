import React from "react";

import { Route } from "react-router-dom";
import data from "../../data";
import IVDrip from "../screens/IVDrip";

const OtherServicesRoutes = () => (
  <React.Fragment>
    <Route path="/regenerative-medicine-stem-cell" component={() => <IVDrip data={data.services[1]} />}
            />
    <Route path="/prp-platelet-rich-plasma" component={() => <IVDrip data={data.services[2]} />}
            />
    <Route path="/orthopedic-joint-treatments" component={() => <IVDrip data={data.services[3]} />}
            />
    <Route path="/reversing-arthritis" component={() => <IVDrip data={data.services[4]} />}
            />
    <Route path="/peripheral-neuropathy" component={() => <IVDrip data={data.services[5]} />}
            />
    <Route path="/hair-growth" component={() => <IVDrip data={data.services[6]} />}
            />
    <Route path="/allergy-elimination" component={() => <IVDrip data={data.services[7]} />}
          />
          <Route path="/chronic-conditions" component={() => <IVDrip data={data.services[8]} />}
            />
    <Route path="/chiropractic" component={() => <IVDrip data={data.services[9]} />}
            />
 </React.Fragment>
);

export default OtherServicesRoutes;

