import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function RecipeList(props) {
  // Function for if there is no API data, this will let the user know if a custom search did not find a recipe.
  const noItem = () =>
    props.data.meals ? null : (
      <>
        <span>API did not return a recipe, please try a different name.</span>
      </>
    );

  //Render the list of Ingredients, the API returns a individual item for each Ingredient, we need to loop
  //through the list so that we can give each item it's own <p> to form the list.
  const renderIngredients = (recipe) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe["strIngredient" + i];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }

    return (
      <div className="fs-6">
        {ingredients.map((ingredient, index) => (
          <p className="m-1" key={index}>
            {ingredient}
          </p>
        ))}
      </div>
    );
  };

  //Same as the renderIngredients function but for the measurements
  const renderMeasurements = (recipe) => {
    const measurements = [];

    for (let i = 1; i <= 20; i++) {
      const measurement = recipe["strMeasure" + i];
      if (measurement) {
        measurements.push(measurement);
      }
    }

    return (
      <div className="fs-6">
        {measurements.map((measurement, index) => (
          <p className="m-1" key={index}>
            {measurement}
          </p>
        ))}
      </div>
    );
  };

  //Render the description of the recipe. The data returned from the API has line breaks but they are not respected so we
  //need to replace them with <br> tags in order to make the description of the recipe not one big wall of text.
  const renderDescription = (recipe) => {
    const edited = recipe.strInstructions.replace(/\n/g, "<br>");
    return <span dangerouslySetInnerHTML={{ __html: edited }} />;
  };

  //render each recipe that is returned as its own card.
  const renderRecipies = () =>
    // if API returned data map through the data
    props.data.meals && props.data.meals.length > 0
      ? props.data.meals.map((recipe) => (
          <Row key={recipe.idMeal} className="mt-2 shadow-lg">
            {/* Whole Card */}
            <Card className="bg-transparent border-white">
              <div className="">
                <Card.Body className="p-0">
                  <Card.Title className="fs-4 p-2 m-0 d-flex justify-content-center">
                    {recipe.strMeal}
                  </Card.Title>
                  {/* Div for Image */}
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-around">
                    <div className="d-flex w-25">
                      <Card.Img
                        // style={{ width: "auto", height: "auto" }}
                        className="rounded my-2 shadow-lg"
                        variant="top"
                        src={recipe.strMealThumb}
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-evenly align-items-baseline">
                        <Card.Text as="div" className="fs-5 px-3">
                          Ingredients: {renderIngredients(recipe)}
                        </Card.Text>
                        <Card.Text as="div" className="fs-5 px-3">
                          Measurements: {renderMeasurements(recipe)}
                        </Card.Text>
                      </div>
                    </div>
                  </div>
                  <p>Instructions: {renderDescription(recipe)}</p>
                </Card.Body>
              </div>
            </Card>
          </Row>
        ))
      : noItem();

  return (
    <>
      {/* created a container and render the recipes */}
      <Container
        className="pd-2"
        style={{ display: props.shouldHide ? "none" : "block" }}
      >
        {renderRecipies()}
      </Container>
    </>
  );
}

export default RecipeList;
