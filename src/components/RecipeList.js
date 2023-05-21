import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function RecipeList(props) {
  const listMeal =
    props.data.meals && props.data.meals.length > 0 ? (
      <span key={props.data.meals[0].idMeal}>
        Name: {props.data.meals[0].strMeal}
      </span>
    ) : null;

  const imageUrl =
    props.data.meals && props.data.meals.length > 0
      ? props.data.meals[0].strMealThumb !== ""
        ? props.data.meals[0].strMealThumb
        : null
      : null;

  const mealItem = (apiItem, passedName) =>
    props.data.meals
      ? props.data.meals.map((item) =>
          item[apiItem] !== "" ? (
            <span key={item.idMeal}>
              {passedName} {item[apiItem]}
            </span>
          ) : null
        )
      : null;

  const ingredientItems = () => {
    if (props.data.meals) {
      const ingredients = [`Ingredient:`];
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
      const ingredients = [`Measurement:`];
      for (let i = 1; i <= 20; i++) {
        const ingredient = props.data.meals[0]["strMeasure" + i];
        if (ingredient) {
          ingredients.push(<span key={i}>{ingredient}</span>);
        } else {
          break;
        }
      }
      return ingredients;
    }
    return null;
  };

  const noItem = () =>
    props.data.meals || props.data.id ? null : (
      <>
        <span>API did not return a recipe, please try a different name.</span>
      </>
    );

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
              <Card.Title className="text-black">{listMeal}</Card.Title>
              <Card.Title className="text-black text-center">
                {noItem()}
              </Card.Title>
              <div className="d-flex justify-content-between align-items-baseline">
                <Card.Text className="d-grid text-black">
                  {ingredientItems()}
                </Card.Text>
                <Card.Text className="d-grid text-black">
                  {ingredientItemsMeasure()}
                </Card.Text>
              </div>
              <Card.Text className="text-black">
                {mealItem("strInstructions", "Instructions:")}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default RecipeList;
