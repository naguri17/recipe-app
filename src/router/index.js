import { Routes, Route } from "react-router-dom";
import Recipes from "../pages/Recipes";
import ShoppingList from "./../pages/ShoppingList";

export function RouterProvider() {
  return (
    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/shopping-list" element={<ShoppingList />} />
      <Route path="/*" element={<div>abc</div>} />
    </Routes>
  );
}
