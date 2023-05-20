import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipeName, setRecipeName] = useState();

  return (
    <>
      <RecipeList />

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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default App;
