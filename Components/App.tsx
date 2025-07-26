import "./App.css";
import Products from "./components/ProductListA";
import ProductList from "./components/ProductListB";
function App() {
  return (
    <div className="container mt-1">
      {/* <h1>My First React Application</h1> */}
      <Products />
      <ProductList />
    </div>
  );
}
export default App;
