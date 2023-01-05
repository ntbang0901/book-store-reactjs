import { Fragment, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { publicRoutes, privateAdminRoutes } from "./index";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function ComponentRoute() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const Routes =
      currentUser && currentUser.loaiuserid === 1
        ? [...privateAdminRoutes, ...publicRoutes]
        : publicRoutes;
    setRoutes(Routes);
  }, [currentUser]);

  console.log(routes);
  return (
    <Switch>
      {routes.map((route, index) => {
        const Page = route.component;
        let Layout = DefaultLayout;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = Fragment;
        }
        console.log(route);

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
