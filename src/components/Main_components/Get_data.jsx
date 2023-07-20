import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../css files/searchbar.css";
import "../css files/Getdata.css"
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Getdata = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8085/recipe/getAll")
      .then((res) => {
        setData(res.data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        // return true/false
        return Object.values(item.name)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  const delete_handler = (e, index, del) => {
    e.preventDefault();
    // API CALL
    // console.log(data[index].id);
    axios
      .delete(`http://localhost:8085/recipe/${data[index].id}`)
      .then((res) => {
        setData(data.filter((curElem) => curElem.id !== del));
        setFilteredResults(
          filteredResults.filter((curElem) => curElem.id !== del)
        );  
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            value={searchInput}
            onChange={(e) => searchItems(e.target.value)}
            placeholder="What are you looking for?"
          />

          <button type="submit" class="searchButton">
            <i class="fa fa-search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2s"
                style={{ color: "#ea168a" }}
              />
            </i>
          </button>
        </div>
      </div>
      <div className="row">
        {searchInput.length > 1
          ? filteredResults.map((curElem, index) => (
              <div className="main column" key={index}>
                <div className="recipe-id">{curElem.id}</div>
                <div className="recipe-name">{curElem.name}</div>
                <div className="delete-btn">
                  <button
                    className="btn1"
                    onClick={(e) => delete_handler(e, index, curElem.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="xl"
                      style={{ color: "#ea168a" }}
                    />
                  </button>
                </div>
              </div>
            ))
          : data.map((curElem, index) => (
              <div className="main" key={index}>
                <div className="recipe-id">{curElem.id}</div>
                <div className="recipe-name">{curElem.name}</div>
                <div className="delete-btn">
                  <button
                    className="btn1"
                    onClick={(e) => delete_handler(e, index, curElem.id)}
                  >
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="xl"
                      style={{ color: "#ea168a" }}
                    />
                  </button>
                </div>
              </div>
            ))}
        <ToastContainer />
      </div>
    </>
  );
};

export default Getdata;
