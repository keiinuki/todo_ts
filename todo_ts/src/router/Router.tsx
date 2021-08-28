import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { Page3 } from "../pages/Page3";
import { Page1DetailA } from "../pages/Page1DetailA";
import { Page1DetailB } from "../pages/Page1DetailB";
import { Parameter } from "../pages/Parameter";
import { Page404 } from "../pages/Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) =>(
          <Switch>        
            <Route exact path={`${url}`}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
          )}
      ></Route>
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>      
            <Route exact path={`${url}`}>
              <Page2 />
            </Route>
            <Route path={`${url}/:id`}>
              <Parameter />
            </Route>
            <Route path={`${url}/*`}>
              <Page404 />
            </Route>
          </Switch>
        )}
      ></Route>
      <Route path="/Page3">
        <Page3 />
      </Route>
      <Route path="/*">
        <Page404 />
      </Route>
    </Switch>
  );
};