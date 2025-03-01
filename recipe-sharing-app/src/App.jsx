import { Router } from "react-router-dom";
import { useState } from "react";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { Link } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  const setRecipes = useRecipeStore((state) => state.SetRecipes);

  useEffect(() => {
    setRecipes([
      { id: 1, title: "Pasta", description: "Italian classic" },
      { id: 2, title: "Burger", description: "American staple" },
      { id: 3, title: "Sushi", description: "Japanese delight" },
    ]);
  }, [setRecipes]);

  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <SearchBar /> {}
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  );
}

const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;
