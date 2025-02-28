import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/edit",
    Component: EditRecipeForm,
  },
  {
    path: "/delete",
    component: DeleteRecipeButton,
  },
]);

export default router;
