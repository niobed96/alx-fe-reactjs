import React, { useState, useEffect } from "react";
import recipeDate from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeDate);
  }, []);
  return (
    <>
      <div>
        <div className="m-20">
          <h1 className="text-3xl text-green-800 font-semibold text-center">
            Recipe collection
          </h1>
          <div className="md:grid grid-cols-2 sm:grid-cols-1 my-10 gap-5">
            {recipes.length > 0 ? (
              recipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="mx-auto p-5 mb-14 bg-white shadow-lg rounded-2xl hover:bg-gray-300"
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className=" h-4/6 rounded-2xl my-8"
                  />
                  <div>
                    <h2 className="font-semibold">{recipe.title}</h2>
                    <p>{recipe.summary}</p>
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
