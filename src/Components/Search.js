import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../logo.png";
import { fetchData, reset } from "../Store/RecipeSlice";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleClick = (evt) => {
    evt.preventDefault();
    dispatch(reset());
    dispatch(fetchData(query));
    setQuery("");
  };
  return (
    <>
      <div className="p-3 p-md-4 col-md-8 offset-md-2">
        <div className="p-3 d-flex justify-content-center align-items-center">
          <img src={logo} alt="" height={50} />
          <p className="mx-2 my-2 display-6 heading ter">Recipe Villa</p>
        </div>
        <form className="col-md-8 offset-md-2 mt-4" onSubmit={handleClick}>
          <div className="mb-3 rounded-pill p-2 d-flex input-container">
            <button
              className="shadow-none bt btn-dark bg-transparent border-0 p-1 ms-2"
              type="submit"
              onClick={handleClick}
              id="btnSearch">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              className="shadow-none rounded-0 border-dark bg-transparent ps-4 text-white input"
              value={query}
              onChange={(evt) => {
                setQuery(evt.target.value);
              }}
              placeholder="Search Recipe..."
            />
          </div>
          <div className="row">
            <div
              className="col-6 col-sm-4 offset-sm-1 col-md-5 col-lg-3 offset-md-1 offset-lg-0 p-3"
              onClick={() => dispatch(fetchData("italian"))}>
              <p className="rounded-circle input-container h-100 p-3 text-center text-white">
                <img
                  width="36"
                  height="36"
                  src="https://img.icons8.com/dotty/80/ffffff/salami-pizza.png"
                  alt="salami-pizza"
                />
                <br />
                Italian
              </p>
            </div>
            <div
              className="col-6 col-sm-4 col-md-5 col-lg-3 p-3"
              onClick={() => dispatch(fetchData("mexican"))}>
              <p className="rounded-circle input-container h-100 p-3 text-center text-white">
                <img
                  width="36"
                  height="36"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/taco.png"
                  alt="taco"
                />
                <br />
                Mexican
              </p>
            </div>
            <div
              className="col-6 col-sm-3 offset-sm-1 col-md-5 col-lg-3 p-3 offset-md-1 offset-lg-0"
              onClick={() => dispatch(fetchData("japanese"))}>
              <p className="rounded-circle input-container h-100 p-3 text-center text-white">
                <img
                  width="36"
                  height="36"
                  src="https://img.icons8.com/color/48/bento.png"
                  alt="bento"
                />
                <br />
                Japanese
              </p>
            </div>
            <div
              className="col-6 col-sm-4 col-md-5 col-lg-3 p-3"
              onClick={() => dispatch(fetchData("indian"))}>
              <p className="rounded-circle input-container h-100 p-3 text-center text-white">
                <img
                  width="36"
                  height="36"
                  src="https://img.icons8.com/color/48/samosa.png"
                  alt="samosa"
                />
                <br />
                Indian
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
