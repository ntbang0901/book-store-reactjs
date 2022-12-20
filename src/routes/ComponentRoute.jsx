import { Fragment, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./index";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ComponentRoute() {
  const currentUser = useSelector((state) => state.auth.currentUser);

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

        if (route.isAdmin && currentUser && currentUser.loaiuserid === 2) {
          return;
        } else {
          return (
            <Route key={index} path={route.path} exact={route.exact}>
              <Layout>
                <Page />
              </Layout>
            </Route>
          );
        }
      })}
    </Switch>
  );
}

export default ComponentRoute;
