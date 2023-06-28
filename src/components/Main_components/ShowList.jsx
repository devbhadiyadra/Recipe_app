import React from "react";
import "../css files/showList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,faT,faTrash
} from "@fortawesome/free-solid-svg-icons";
const ShowList = () => {
  return (
    <>
      <div className="main">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>RECIPE NAME</th>
              <th style={{width:"20%"}}>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>samosa</td>
              <td>
                <button className="btn1"><FontAwesomeIcon
                    icon={faPenToSquare}
                    size="xl"
                    style={{ color: "#ea168a" }}
                  /></button>
                <button className="btn1" style={{marginLeft:"10px"}}><FontAwesomeIcon
                    icon={faTrash}
                    size="xl"
                    style={{ color: "#ea168a" }}
                  /></button>
              </td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowList;
