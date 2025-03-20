import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [step, setStep] = useState("");

  //error state
  const [errors, setErrors] = useState({});
  //Validate
  const validate = () => {
    const newErrors = {};
    if (!title) {
      newErrors.title = "Title is required";
    }
    const ingredientsArray = ingredient
      .split("\n")
      .filter((item) => item.trim());
    if (ingredientsArray.length < 2) {
      newErrors.ingredient = "Please Enter Atleast Two Ingredient";
    }
    const stepsArray = step.split("\n").filter((item) => item.trim());
    if (stepsArray.length < 1) {
      newErrors.step = "Please Provide atleast 1 step";
    }
    return newErrors;
  };
  //Handle form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title: title.trim(),
        ingredient: ingredientsArray,
        step: stepsArray,
      };

      console.log("New Recipe:", newRecipe);

      setTitle();
      setIngredient();
      setStep();

      alert("New Recipe submitted successfuly!");
    }
  };
  return (
    <>
      <div>
        <div className="m-20 items-center justify-center sm:w-full md:w-1/2 lg:1/3  m-auto">
          <form onSubmit={handleSubmit} className="p-12 shadow-lg py-20">
            <h1 className="text-3xl text-center font-bold mb-10">
              Submit Recipe
            </h1>
            <div className="flex flex-col mb-10">
              <label htmlFor="title" className="text-xl font-medium mb-3">
                Recipe Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
                className="h-10 px-5 placeholder:font-normal rounded-lg bg-gray-300"
              />
            </div>
            <div className="flex flex-col mb-10">
              <label htmlFor="ingredients" className="text-xl font-medium mb-3">
                Ingredients
              </label>
              <textarea
                name="Ingredients"
                id="ingredients"
                onChange={(e) => setIngredient(e.target.value)}
                className="h-24 rounded-lg bg-gray-300 p-5"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="steps" className="text-xl font-medium mb-3">
                {" "}
                Preparation steps
              </label>
              <textarea
                name=" preparation steps"
                id="steps"
                onChange={(e) => setStep(e.target.value)}
                className="h-24 rounded-lg bg-gray-300 p-5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 px-5 py-3 text-lg font-medium rounded-xl text-white my-10 "
            >
              Submit Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddRecipeForm;
