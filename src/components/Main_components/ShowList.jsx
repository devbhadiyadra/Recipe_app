import React, { useEffect, useState } from "react";
import "../css files/showList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const URL = "http://localhost:8085";

const ShowList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //  API CALL
    axios.get(URL + "/recipe/getAll").then((response) => {
      if (Array.isArray(response.data)) {
        setData(response.data);
      } else {
        console.error("Invalid response data format.");
      }
    });
  }, []);

  const delete_handler=(e,index,del)=>{
    e.preventDefault()
    // API CALL
    console.log(data[index].id)
     axios.delete(`http://localhost:8085/recipe/${data[index].id}`)
     .then((res)=>{
       console.log("deleted")
       setData(data.filter((curElem) => curElem.id !== del));
       console.log(data)
   
      })
    
     .catch((error)=>{console.log(error)})
  }
  return (
    <>
    
      <div style={{ marginTop: "40px" }}>
        {data.map((curElem,index) => (
          <div className="main" key={index}>
            <div className="recipe-id" >{curElem.id}</div>
            <div className="recipe-name">{curElem.name}</div>
            <div className="edit-btn">
              <button className="btn1">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="xl"
                  style={{ color: "#ea168a" }}
                />
              </button>
            </div>

            <div className="delete-btn">
              <button className="btn1" onClick={(e)=>delete_handler(e,index,curElem.id)}>
                <FontAwesomeIcon
                  icon={faTrash}
                  size="xl"
                  style={{ color: "#ea168a" }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </>
  );
};

export default ShowList;
