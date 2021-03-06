import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/main";

import { Homepage, Recipes } from "./pages";

export const ROUTES = {
  HOME: "/",
  RECIPES: "/recipes",
};

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.RECIPES} element={<Recipes />} />
      </Route>
    </Routes>
  );
};
