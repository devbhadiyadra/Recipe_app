import React from "react";
import "../css files/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus,faList} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <div className="main_div">
        <div className="recipe_name">
          <h1>Recipe</h1>
        </div>

        <div className="add_btn_div">
          <button style={{ border: "none", backgroundColor: "#ea168a" }}>
            <Link to="/Adddata">
              <FontAwesomeIcon
                icon={faCirclePlus}
                size="2xl"
                style={{ color: "black" }}
              />
            </Link>
          </button>
        </div>

        <div className="showList_btn_div">
          <button style={{ border: "none", backgroundColor: "#ea168a" }}>
            <Link to="/">
              <FontAwesomeIcon
                icon={faList}
                size="2xl"
                style={{ color: "black" }}
              />
            </Link>
          </button> 
        </div>
      </div>
    </>
  );
};

export default Navbar;
