import { Provider } from "react-redux";
import { MainLayout } from "./layouts/MainLayout";
import { store } from "./redux/store";
import { RouterProvider } from "./router";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import "antd/dist/antd.css";

export default function RecipeApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainLayout>
          <RouterProvider />
        </MainLayout>
      </Provider>
    </BrowserRouter>
  );
}
