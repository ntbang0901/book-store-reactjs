import { Fragment } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { publicRoutes } from "./index";
import DefaultLayout from "../components/layouts/DefaultLayout";
import routeConfig from "../config/routes";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ComponentRoute() {
  return (
    <Switch>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        let Layout = DefaultLayout;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = Fragment;
        }
        return (
          <Route key={index} path={route.path} exact={route.exact}>
            <Layout>
              <Page />
            </Layout>
          </Route>
        );
      })}
    </Switch>
  );
}

export default ComponentRoute;
