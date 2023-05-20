import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function RecipeList() {
  return (
    <Container className="pd-2">
      <Row className="justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            className="thumbnail rounded fluid"
            variant="top"
            src="https://picsum.photos/200/300"
          />
          <Card.Body>
            <Card.Title className="text-black">Card Title</Card.Title>
            <Card.Text className="text-black">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default RecipeList;
