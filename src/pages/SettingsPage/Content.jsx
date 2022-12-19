import { Route, Switch } from "react-router-dom";

function Content({ routes }) {
  return (
    <div className="content-sidebar" style={{ padding: "10px" }}>
      <Switch>
        {routes.map((route, index) => {
          console.log(route);
          return (
            <Route key={index} path={route.path} exact={route.exact}>
              {route.main}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
}

export default Content;
