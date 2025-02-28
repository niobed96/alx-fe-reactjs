import { useState } from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import { Link } from "react-router-dom";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <AddRecipeForm />
      <RecipeList />
    </>
  );
}

export default App;
