import React from "react";
import { Link } from "react-router-dom";
import "../css files/Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const Main = () => {
  return (
    <>
      <h1 className="header"><center>Recipe</center></h1>
      <div className="main_div">
        <div className="sub_div">
          <button className="main_btn">
            <Link to="/Adddata">
              <FontAwesomeIcon
                icon={faPlus}
                size="2xl"
                style={{ color: "black" }}
              />
            </Link>
          </button>
          {/* <button className="main_btn">
            <Link to="/Getdata">
              {" "}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2xl"
                style={{ color: "black" }}
              />
            </Link>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Main;
