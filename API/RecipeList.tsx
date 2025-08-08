import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Recipe = {
  id: string;
  name: string;
  cuisine: string;
  cookTimeMinutes: number;
  image: string;
  ingredients: string[];
};

function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        console.log("Network Error: Failed to fetch recipes");
        return;
      }

      // Error ! not working -- Recipe.map is not a function
      // this syntax we used in last session for product list.

      // const data: Recipe[] = await response.json();
      // setRecipes(data);

      // this code works
      const data = await response.json();
      setRecipes(data.recipes || []); // Ensure recipes is an array
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Recipe List</h2>
      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 mb-1" key={recipe.id}>
            <div className="card h-100">
              <img
                src={recipe.image}
                className="card-img-top p-3"
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "auto",
                }}
                alt={recipe.name}
              />
              <div className="card-body">
                <h5 className="text-danger text-center">
                  Price: ${recipe.cookTimeMinutes}
                </h5>
                <h6 className="text-center">{recipe.name}</h6>
                <p
                  className="text-primary"
                  style={{ textAlign: "center", fontSize: "18px" }}
                >
                  Cuisine: {recipe.cuisine}
                </p>
                <div className="text-black" style={{ fontSize: "16px" }}>
                  Ingredients:
                </div>
                <div
                  className=""
                  style={{ fontSize: "14px", fontStyle: "italic" }}
                >
                  {recipe.ingredients.slice(0, 3).map((ingds, index) => (
                    <span key={index} className="text-secondary">
                      {ingds}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
