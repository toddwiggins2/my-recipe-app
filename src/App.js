import "./App.css";
import "./custom.css"
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState({ id: "1" });
  // const [data, setData] = useState({meals: [{idMeal: 2}] });
  const [shouldHide, setShouldHide] = useState(true);

  return (
    <>

      {/* Setup default styling for whole application */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container className="py-3">
       
          {/* Searchbar container, pass props for API back and forth */}
          <SearchBar
            data={data}
            setData={setData}
            onDataUpdate={setData}
            hideRecipe={setShouldHide}
          />
          {/* List the Recipie data that was returned from the API search */}
          <RecipeList
            data={data}
            setData={setData}
            onDataUpdate={setData}
            shouldHide={shouldHide}
          />
        </Container>
      </div>
    </>
  );
}

export default App;
