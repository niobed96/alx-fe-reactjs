import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <div>Recipe not found</div>;

  const isFavorite = favorites.includes(recipe.id);
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button onClick={() => navigate("/")}>Back to Recipes</button>
    </div>
  );
};

export default RecipeDetails;
