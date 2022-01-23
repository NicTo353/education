import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppContext from "../../context";
import { publicRoutes, teacherRoutes, RouteNames } from "../../routes";

const AppRouter = () => {
  const { token } = useContext(AppContext);

  const routesToRouteElements = (routes) => {
    return routes.map((r) => {
      return <Route key={r.path} path={r.path} element={<r.element />}></Route>;
    });
  };

  const routes = token ? (
    <Routes>
      {routesToRouteElements(teacherRoutes)}
      <Route path="*" element={<Navigate to={RouteNames.TEACHERS} />} />
    </Routes>
  ) : (
    <Routes>
      {routesToRouteElements(publicRoutes)}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );

  return <>{routes}</>;
};

export default AppRouter;
