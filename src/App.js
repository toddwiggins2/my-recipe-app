import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

function App() {
  const [recipeName, setRecipeName] = useState();

  return (
    <>
      <Container>
        <Row>
          <Col>
            <SearchBar />
            <RecipeList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
