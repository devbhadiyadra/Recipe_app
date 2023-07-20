import React, { useEffect, useState } from "react";
import "../css files/showList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faTrash,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const URL = "http://localhost:8085/recipe/getAll";

const ShowList = () => {
  const [data, setData] = useState([]);

  const [height, setheight] = useState(45);

  const [showalldata, setShowalldata] = useState();

  const [hidebtn, setHidebtn] = useState(false);
  const [showbtn, setShowbtn] = useState(true);

  useEffect(() => {
    //  API CALL
    axios.get(URL).then((response) => {
      setData(response.data);
    });
  }, []);
  
 

  const delete_handler = (e, index, del) => {
    e.preventDefault();
    // API CALL
    console.log(data[index].id);
    axios
      .delete(`http://localhost:8085/recipe/${data[index].id}`)
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("del", del);
    setData(data.filter((curElem) => curElem.id !== del));

    console.log(data);
  };

  const down_arrow = (e, index, id) => {
    e.preventDefault();
    // console.log("show all",showalldata)
    setShowalldata(showalldata.filter((curElem) => curElem.id === id));

    console.log("data : ", showalldata);
    // if(temp){
    //   setheight(150);
    //   setShowbtn(false);
    //   setHidebtn(true);
    // }
    // console.log("temp : ", temp[index].id);

    // console.log("id : ",id)

    // console.log("show all ", showalldata);
  };

  const up_arrow = (e) => {
    e.preventDefault();
    setShowbtn(true);
    setHidebtn(false);
    setheight(45);
    // setShowalldata(null);
  };

  return (
    <>
      <div style={{ marginTop: "40px" }}>
        {data.map((curElem, index) => (
          <div className="main" key={index} style={{ height: `${height}px` }}>
            <div className="recipe-id">{curElem.id}</div>
            <div className="recipe-name">{curElem.name}</div>
            <div className="edit-btn">
              {showbtn && (
                <button
                  className="btn1"
                  onClick={(e) => down_arrow(e, index, curElem.id)}
                >
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    size="xl"
                    style={{ color: "#ea168a" }}
                  />
                </button>
              )}
              {hidebtn && (
                <button className="btn1" onClick={(e) => up_arrow(e)}>
                  <FontAwesomeIcon
                    icon={faAngleUp}
                    size="xl"
                    style={{ color: "#ea168a" }}
                  />
                </button>
              )}
            </div>
            {/* {showalldata && <div>Selected Data: {showalldata}</div>} */}
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
      </div>

      <ToastContainer />
    </>
  );
};

export default ShowList;
