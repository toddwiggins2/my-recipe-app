import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar(props) {

  const [input, setInput] = useState();
  const [url, setUrl] = useState();
  // `https://www.themealdb.com/api/json/v1/1/random.php`

  const fetchData = async (buttonPref) => {
    const apiUrl =
      input === "" || input === undefined || buttonPref === "random"
        ? "https://www.themealdb.com/api/json/v1/1/random.php"
        : `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.replace(
            /\s/g,
            ""
          )}`;

    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      jsonData.meals === null
       ? props.onDataUpdate([{id:`bad`}])
          // props.onDataUpdate([{id:`bad`}])
        : props.onDataUpdate(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    fetchData();
  };

  const handleChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    setUrl(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value.replace(
        /\s/g,
        ""
      )}`
    );
  };

  return (
    <Container className="rounded-bottom col-sm-6">
      <Form className="py-1" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control
            type="input"
            placeholder="Recipe Name"
            onChange={handleChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                fetchData();
              }
            }}
          />
        </Form.Group>
        <div className="d-flex justify-content-evenly">
          <Button
            className="my-2 px-4"
            variant="primary"
            // type="submit"
            onClick={() => fetchData()}
          >
            Search
          </Button>
          <Button
            className="my-2 px-4"
            variant="primary"
            // type="submit"
            onClick={() => fetchData("random")}
          >
            Random Recipe
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default SearchBar;
