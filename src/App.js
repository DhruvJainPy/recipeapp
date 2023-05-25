import "./App.css";
import Search from "./Components/Search";
import Recipe from "./Components/Recipe";

function App() {
  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
      }}>
      <div className="row">
        <Search />
      </div>
      <div className="row">
        <Recipe />
      </div>
    </div>
  );
}

export default App;
