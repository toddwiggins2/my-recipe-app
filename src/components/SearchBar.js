import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar(props) {
    // useEffect(() => {
    //   fetchData();
    // }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const jsonData = await response.json();
      props.onDataUpdate(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Container className="rounded-bottom col-sm-6">
      <Form className="py-1">
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="input" placeholder="Recipe Name" />
        </Form.Group>
        <Button
          className="my-2"
          variant="primary"
        //   type="submit"
          onClick={() => fetchData()}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default SearchBar;
