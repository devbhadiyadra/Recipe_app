import React from "react";
import "../css files/Getdata.css";
import Card from "../basic-components/card";
import Pagination from "../basic-components/pagination";
import Searchbar from "../basic-components/Searchbar";
const Getdata = () => {
  return (
    <>
      <Searchbar />
      <Card />
      <Pagination />
    </>
  );
};

export default Getdata;
