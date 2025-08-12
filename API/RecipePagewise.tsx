import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recipesPerPage = 8;

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

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

        const data = await response.json();
        setRecipes(data.recipes); // Ensure recipes is an array (structure : obj & array of obj)=> {[{}]}
      } catch (error: any) {
        setError(error.message); // set/store error
      } finally {
        setLoading(false); // stop loading in all cases
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="d-flex flex-column align-items-center gap-2">
          <img
            src="./src/assets/bar.gif"
            alt=""
            style={{ width: "60px", height: "60px" }}
          />
          <div>Loading... Please Wait</div>
        </div>
      </div>
    );
  }

  if (error) {
    return <h4 className="text-danger text-center mt-5">{error}</h4>;
  }

  return (
    <div className="container mt-3">
      <h2 className="mb-3 text-center">Recipe List</h2>
      <div className="row">
        {currentRecipes.map((recipe) => (
          <div className="col-md-3 mb-1" key={recipe.id}>
            <div className="card h-100">
              <img
                src={recipe.image}
                className="card-img-top p-3 img-fluid zoom-hover"
                style={{
                  width: "200px",
                  height: "200px",
                  margin: "auto",
                  objectFit: "contain",
                  borderRadius: "20px",
                }}
                alt={recipe.name}
              />

              <div className="card-body">
                <h3
                  className="text-primary text-center"
                  style={{ textAlign: "center", fontSize: "20px" }}
                >
                  {recipe.name}
                </h3>
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

      {/* Pagination */}
      <div className="d-flex justify-content-center gap-2 mt-4">
        <button
          className="btn btn-outline-primary"
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0 });
          }}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`btn ${
              currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => {
              setCurrentPage(i + 1);
              window.scrollTo({ top: 0 });
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-primary"
          disabled={currentPage === totalPages}
          onClick={() => {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0 });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RecipeList1;
