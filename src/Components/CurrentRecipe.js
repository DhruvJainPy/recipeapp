import React from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
const CurrentRecipe = () => {
  const { currentRecipe } = useSelector((state) => state.recipes);
  return (
    <div
      className="container-fluid my-3 p-3 p-md-4"
      style={{ backgroundColor: "#f5f5f5" }}>
      <div className="row p-3">
        <h1 className="heading">{currentRecipe[0].recipe.label}</h1>
        <ReactStars
          count={5}
          size={24}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          value={Math.floor(Math.random() * 5 + 1)}
          activeColor="#ffd700"
          edit={false}
        />
        <p
          className="my-3 fw-bold"
          style={{ fontSize: "1.1rem", color: "#123456" }}>
          {"By " + currentRecipe[0].recipe.source}
        </p>
        <div className="row">
          <div className="col-md-6 my-3">
            <img
              src={currentRecipe[0].recipe.image}
              className="my-2 img-fluid w-100 h-75 rounded-3"
              alt="..."
              style={{ boxShadow: "4px 4px 4px grey" }}
            />
          </div>
          <div className="col-md-6 p-2 p-md-4 my-3 my-md-4 h-75">
            <p className="display-6 text-center p" style={{ color: "#123456" }}>
              INGREDIENTS
            </p>
            <ul className="h5 my-4 my-md-5">
              {currentRecipe[0].recipe.ingredientLines.map((ingredient) => {
                return (
                  <li className="m-3 m-md-4" key={ingredient}>
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="text-white p-3 p-md-4 col-md-8 offset-md-2 rounded-3 info text-center">
          <div className="row p-3">
            <p className="col-6 col-md-4 p" style={{ fontSize: "1.1rem" }}>
              Yield:
              <span className="m-1 m-md-2 d-block p">
                {currentRecipe[0].recipe.yield}
              </span>
            </p>
            <p className="col-6 col-md-4 p" style={{ fontSize: "1.1rem" }}>
              Calories:
              <span className="m-1 m-md-2 d-block p">
                {Math.floor(currentRecipe[0].recipe.calories) + "kcal"}
              </span>
            </p>
            <p className="col-6 col-md-4 p" style={{ fontSize: "1.1rem" }}>
              Cuisine:
              <span className="m-1 m-md-2 d-block p text-capitalize">
                {currentRecipe[0].recipe.cuisineType.join(",")}
              </span>
            </p>
            <p className="col-6 col-md-4 p" style={{ fontSize: "1.1rem" }}>
              Meal Type:
              <span className="m-1 m-md-2 p d-block text-capitalize">
                {currentRecipe[0].recipe.mealType.join(",")}
              </span>
            </p>
            <p className="col-6 col-md-4 p" style={{ fontSize: "1.1rem" }}>
              Total Weight:
              <span className="m-1 m-md-2 d-block p text-capitalize">
                {Math.round(currentRecipe[0].recipe.totalWeight) + "g"}
              </span>
            </p>
            <p className="col-6 col-md-4 p" style={{ fontSize: "1.1rem" }}>
              Dish Type:
              <span className="m-1 m-md-2 d-block p text-capitalize">
                {currentRecipe[0].recipe.dishType.join(",")}
              </span>
            </p>
          </div>
          <div className="ms-3 my-3">
            <a
              href={currentRecipe[0].recipe.url}
              className="btn btn-success rounded-pill py-2 px-3 mt-3"
              rel="noreferrer"
              target="_blank">
              View Full Recipe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentRecipe;
