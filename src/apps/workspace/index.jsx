import React from "react";
import { Switch, Route } from "react-router-dom";

import Workspace from "pages/workspace";

const App = (props) => (
  <Switch>
    <Route exact path={["/", "/Workspace"]} render={() => <Workspace {...props} />} />
  </Switch>
);
export default App;
