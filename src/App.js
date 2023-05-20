import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";

function App() {
  const [recipeName, setRecipeName] = useState();

  return (
    <>
      <SearchBar />
      <RecipeList />
    </>
  );
}

export default App;
