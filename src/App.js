import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

function App() {
  const [data, setData] = useState({id: '1'});
  // const [data, setData] = useState({meals: [{idMeal: 2}] });


  return (
    <>
      <Container >
        <Row>
          <Col>
            <SearchBar data={data} setData={setData} onDataUpdate={setData} />
            <RecipeList data={data} setData={setData} onDataUpdate={setData} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
