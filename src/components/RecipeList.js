import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";



function RecipeList(props) {
  const listMeal =
    props.data.meals && props.data.meals.length > 0 ? (
      <span key={props.data.meals[0].idMeal}>
        {props.data.meals[0].strMeal}
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
              {passedName} <br />
              <span
                dangerouslySetInnerHTML={{
                  __html: item[apiItem].replace(/\r/g, "<br>"),
                }}
              />
            </span>
          ) : null
        )
      : null;

  const ingredientItems = () => {
    if (props.data.meals) {
      const ingredients = [<h5 key="title">Ingredients:</h5>];

      for (let i = 1; i <= 20; i++) {
        const ingredient = props.data.meals[0]["strIngredient" + i];
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

  const ingredientItemsMeasure = () => {
    if (props.data.meals) {
      const ingredients = [<h5 key="title">Measurements:</h5>];

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
      <Container
        className="pd-2 "
        style={{ display: props.shouldHide ? "none" : "block" }}
      >
        <Row className="justify-content-center">
          <Card className="align-items-center ">
            <Card.Img
              className="rounded w-75 my-2"
              variant="top"
              src={imageUrl}
            />

            <Card.Body>
              <Card.Title className=" d-flex justify-content-evenly">
                {listMeal}
              </Card.Title>
              <Card.Title className=" text-center">{noItem()}</Card.Title>
              <div className="d-flex justify-content-evenly align-items-baseline">
                <Card.Text as="div" className="d-grid ">
                  {ingredientItems()}
                </Card.Text>
                <Card.Text as="div" className="d-grid ">
                  {ingredientItemsMeasure()}
                </Card.Text>
              </div>
              <Card.Text>
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
