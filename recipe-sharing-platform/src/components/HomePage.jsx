import React, { useState, useEffect } from "react";
import recipeDate from "../data.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeDate);
  }, []);
  return (
    <>
      <div>
        <div className="m-20">
          <h1 className="text-3xl text-green-800 font-semibold text-center mb-16">
            Recipe collection
          </h1>
          <div className="cmder justify-center">
            <Link
              to="/add-recipe"
              className="bg-black text-white py-2 px-4 text-lg font-medium rounded-lg items-center"
            >
              Add Recipe
            </Link>
          </div>

          <div className="lg:grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10 gap-5">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="mx-auto p-5 mb-14 bg-white shadow-lg rounded-2xl hover:bg-gray-500"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className=" h-4/6 rounded-2xl my-8"
                  />
                  <div className="flex justify-between">
                    <div className="w-3/4">
                      <h2 className="font-semibold">{recipe.title}</h2>
                      <p>{recipe.summary}</p>
                    </div>
                    <Link
                      to={`/recipe/${recipe.id}`}
                      className="bg-green-900 rounded-lg px-3 items-center font-medium text-white h-9 p-1"
                    >
                      View Recipe
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>Recipes not found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
