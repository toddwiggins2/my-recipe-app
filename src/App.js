import "./App.css";
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container>
          <SearchBar
            data={data}
            setData={setData}
            onDataUpdate={setData}
            hideRecipe={setShouldHide}
          />
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
