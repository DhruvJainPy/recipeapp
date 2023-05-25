import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentRecipe } from "../Store/RecipeSlice";
import ProgressiveImage from "react-progressive-image-loading";
import demo from "../demo.avif";
import CurrentRecipe from "./CurrentRecipe";

const Recipe = () => {
  const { recipes, currentRecipe } = useSelector((state) => state.recipes);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (recipes.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [recipes, currentRecipe]);

  return (
    <>
      {!loading && (
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb">
          <ol className="breadcrumb fw-bold m-md-3">
            <li className="breadcrumb-item li">Home</li>
            <li
              className="breadcrumb-item li"
              onClick={() => {
                setLoading(false);
                dispatch(setCurrentRecipe(null));
              }}>
              Recipes
            </li>
            {currentRecipe.length === 0 ? (
              ""
            ) : (
              <li className="breadcrumb-item li">
                {currentRecipe[0].recipe.label}
              </li>
            )}
          </ol>
        </nav>
      )}
      {!loading &&
        currentRecipe.length === 0 &&
        recipes.map((rec) => {
          return (
            <div className="col-md-3 p-3" key={rec.recipe.uri}>
              <div
                className="card text-dark recipe"
                onClick={() => {
                  dispatch(setCurrentRecipe(rec));
                }}>
                <ProgressiveImage
                  preview={demo}
                  src={rec.recipe.image}
                  transitionTime={450}
                  render={(src, style) => (
                    <img
                      src={src}
                      style={style}
                      className="card-img recipe"
                      alt="..."
                    />
                  )}
                />
                <div
                  className="card-footer text-center d-flex flex-column justify-content-center"
                  style={{ height: "20vh" }}>
                  <p
                    className="h5 heading text-center w-100 "
                    style={{
                      textShadow: "4px 4px 4px grey",
                    }}>
                    {rec.recipe.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      {currentRecipe.length !== 0 ? <CurrentRecipe /> : ""}
    </>
  );
};

export default Recipe;
