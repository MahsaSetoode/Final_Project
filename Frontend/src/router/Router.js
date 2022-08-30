import {
  BrowserRouter as ReactRouter,
  Routes,
  Route,
}from "react-router-dom";
import RouteLink from "./RouteLink";

const Router = () => {
  return (
    <ReactRouter>
        <Routes>
            {
              RouteLink.map(route => {
                  return <Route key={route.path} path={route.path} component={route.component} />
              })
            }
        </Routes>
    </ReactRouter>
  )
};

export default Router;
