import React from "react";
import { MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faHome } from "@fortawesome/free-solid-svg-icons";
import '../css files/searchbar.css'
const Searchbar = () => {
  const search_handler = (e) => {
    alert("click");
  };
  return (
    <>
    
    {/* home btn */}
      <Link to="/">
        <FontAwesomeIcon
          icon={faHome}
          size="xl"
          style={{ color: "black", marginTop: "25px",marginLeft:"25px" }}
        />
      </Link>
      <center>

      {/* search bar */}
      <div className="search_container">
        <MDBCol md="6">
          <div className="input-group md-form form-sm form-1 pl-0 ">
            <input
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          <div className="search_btn">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              style={{ color: "black", marginTop: "11px" }}
              onClick={search_handler}
            />
          </div>
        </MDBCol>
        </div>
      </center>

    </>
  );
};

export default Searchbar;
