import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function RecipeList() {
  return (
    <Container className="rounded-bottom">
      <Form className="py-1">
        <Form.Group className="mb-3" controlId="formBasicInput">
          <Form.Label>Recipe Name</Form.Label>
          <Form.Control type="input" placeholder="Recipe Name" />
        </Form.Group>
        <Button className="my-2" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default RecipeList;
