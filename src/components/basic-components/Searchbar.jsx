import React from 'react'
import { MDBCol } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Searchbar = () => {
    const search_handler=(e)=>{
        alert('click')
      }
  return (
    <>
        <center>
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
              style={{ color: "black" ,marginTop:"11px"}}
              onClick={search_handler}
            />
          </div>
        </MDBCol>
      </center> 
    </>
  )
}

export default Searchbar
