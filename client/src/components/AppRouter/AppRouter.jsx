import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, RouteNames } from "../../routes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((r) => {
        return <Route key={r.path} path={r.path} element={<r.element />}></Route>;
      })}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default AppRouter;
