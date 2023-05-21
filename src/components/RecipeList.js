import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function RecipeList(props) {
  // console.log(listData);
  // console.log(`templist` + templist);

  // if (!Array.isArray(props.data.meal)) {
  //   // Handle the case when listData is not an array, such as setting a default value or showing an error message.
  //   console.log("not an array");
  // }

  const listMeal = props.data.meals
    ? props.data.meals.map((item) =>
        item.strMeal !== "" ? (
          <span key={item.idMeal}>{item.strMeal}</span>
        ) : null
      )
    : null;

  const imageUrl = props.data.meals
    ? props.data.meals.map((item) =>
        item.strMealThumb !== "" ? item.strMealThumb : null
      )
    : null;

  const mealItem = (apiItem) =>
    props.data.meals
      ? props.data.meals.map((item) =>
          item[apiItem] !== "" ? (
            <span key={item.idMeal}>{item[apiItem]}</span>
          ) : null
        )
      : null;

  const ingredientItems = () => {
    if (props.data.meals) {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = props.data.meals[0]["strIngredient" + i];
        if (ingredient) {
          ingredients.push(
            // <div key={i}>
              <span key={i}>{ingredient}</span>
           // </div>
          );
        } else {
          break;
        }
      }
      return ingredients;
    }
    return null;
  };

  const ingredientItemsMeasure = () => {
    if (props.data.meals) {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = props.data.meals[0]["strMeasure" + i];
        if (ingredient) {
          ingredients.push(
            // <div key={i}>
              <span key={i}>{ingredient}</span>
            // </div>
          );
        } else {
          break;
        }
      }
      return ingredients;
    }
    return null;
  };

  // : null;}

  return (
    <>
      <Container className="pd-2">
        <Row className="justify-content-center">
          <Card className="col-sm-6">
            <Card.Img
              className="rounded img-fluid my-2"
              variant="top"
              src={imageUrl}
            />

            <Card.Body>
              {/* <Card.Title className="text-black">Card Title</Card.Title> */}
              <Card.Title className="text-black">Name: {listMeal}</Card.Title>
              <div className="d-flex justify-content-between align-items-baseline">
                <Card.Text className="d-grid text-black">
                  Ingredient: 
                  {ingredientItems()}
                </Card.Text>
                <Card.Text className="d-grid text-black">
                  Measurement: {ingredientItemsMeasure()}
                </Card.Text>
              </div>
              <Card.Text className="text-black">
                Instructions: {mealItem("strInstructions")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default RecipeList;
