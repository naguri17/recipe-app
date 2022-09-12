import { Switch, Route } from "react-router-dom";
import Recipes from "../pages/Recipes";
import ShoppingList from "./../pages/ShoppingList";

export function RouterProvider() {
  return (
    <Switch>
      <Route exact path="/">
        <Recipes />
      </Route>
      <Route exact path="/shopping-list">
        <ShoppingList />
      </Route>
      <Route path="*">
        <div>abc</div>
      </Route>
    </Switch>
  );
}
