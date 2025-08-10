import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Recipe {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cuisine: string;
}

function RecipeList1() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Shows loading spinner/text
  const [error, setError] = useState<string | null>(null); // Stores error message
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error("Network Error: Failed to fetch recipes from API");
          return;
        }
        // this code works
        const data = await response.json();
        setRecipes(data.recipes); // Ensure recipes is an array (structure : obj & array of obj)=> {[{}]}
      } catch (error: any) {
        setError(error.message); // store error
      } finally {
        setLoading(false); // stop loading in all cases
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      // Loading spinner and loading text
      // d-flex(display flex , center the spinner and text)
      // justify-content-center(centers horizontally)
      // align-items-center(centers vertically)
      // gap-2(adds space between spinner and text)

      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex align-items-center gap-2">
          <div className="spinner-border" role="status" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return <h2 className="text-danger">{error}</h2>;
  }

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
                  width: "250px",
                  height: "250px",
                  margin: "auto",
                }}
                alt={recipe.name}
              />
              <div className="card-body">
                <h5
                  className="text-primary text-center"
                  style={{ textAlign: "center", fontSize: "20px" }}
                >
                  {recipe.name}
                </h5>
                <h5
                  className="text-danger text-center"
                  style={{ textAlign: "center", fontSize: "20px" }}
                >
                  {recipe.cuisine}
                </h5>
                <h5
                  className="text-secondary text-center fst-italic"
                  style={{ textAlign: "center", fontSize: "16px" }}
                >
                  Difficulty: {recipe.difficulty}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeList1;
