import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar(props) {
  // State to handle input in inputbox for searching API
  const [input, setInput] = useState();

  // fetchAPI call to "themealdb" free api for recipes
  const fetchData = async (buttonPref) => {
    const apiUrl =
      // Define what API to call based on what is or is not iu the Input box. No input or if random button is
      // pushed calls the random recipie API. If there is a string value in the input box then it will use the
      // search API call to search
      input === "" || input === undefined || buttonPref === "random"
        ? "https://www.themealdb.com/api/json/v1/1/random.php"
        : //We need to also remove the spaces in the search API. .replace(/\s/g used for this on input string
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${input.replace(
            /\s/g,
            ""
          )}`;

    try {
      //try and fetch api data wait for responce
      const response = await fetch(apiUrl);

      //set value to the api responce
      const jsonData = await response.json();

      //if data returned is null example no recipie found from search string then set the ID to 'bad'
      jsonData.meals === null
        ? props.onDataUpdate([{ id: `bad` }])
        : //else if the data came back then set the onDataUpdate to the jsonData that was returned. and set the recipie card to be show
          props.onDataUpdate(jsonData);
      props.hideRecipe(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  //function to handle when the Submit button is pressed.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    fetchData();
  };

  //Function to monitor the inputput and set the useState hook to the value of what is in the input box.
  const handleChange = (event) => {
    event.preventDefault(); // Prevent default form submission
    setInput(event.target.value);
  };

  return (
    <Container className="rounded-bottom px-0">
      <Form className="py-1" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicInput">
          {/* Input box for recipie name search */}
          <Form.Control
            className="bg-transparent border-white shadow-lg color-white"
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

        {/* Container for two buttons, One to search and call the handleSubmit function and one to call a 
        random search by calling the handleSubmit function but passing in "random" so it knows to call the
        random API */}
        <div className="d-flex justify-content-evenly">
          <Button
            type="button"
            className="my-2 px-4 shadow"
            variant="primary"
            // type="submit"
            onClick={() => fetchData()}
          >
            Search
          </Button>
          <Button
            className="my-2 px-4 shadow"
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
