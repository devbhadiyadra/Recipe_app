import React, { useState } from "react";
import "../css files/card.css";
import Card_all_data from "./card_all_data";
const Card = () => {
  const [readmorebtn, Setreadmorebtn] = useState(false);
  const [readmorebtnhide, setreadmorebtnhide] = useState(true);
  const [hide, sethide] = useState(false);
  const temp = () => {
    alert("click");
  };

  const readmore = (e) => {
    // const mynewInputdata={
    //   id:new Date().getTime().toString(),
    //   name:"samosa"
    // }
    e.preventDefault();
    Setreadmorebtn(true);
    setreadmorebtnhide(false);
    sethide(true);
  };

  const Hide = () => {
    Setreadmorebtn(false);
    setreadmorebtnhide(true);
    sethide(false);
  };
  return (
    <>
      <section className="main-card--cointainer">
        <div className="card-container">
          <div className="card">
            <div className="card-body">
              <span className="card-author subtle">breakfast</span>
              <h2>samosa</h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg"
                className="card-media"
                alt="images"
              />
              <p>reacipe description</p>
              <span>ingridients</span>
              <br />
              <span>making time</span>
              <br />
              <span>steps</span>
              
              {/* {readmorebtn && (
                <>
                  <span>ingridients</span>
                  <br />
                  <span>making time</span>
                  <br />
                  <span>steps</span>
                </>
              )}

               {readmorebtnhide && <>
                 <button className="btn btn-primary readmore" onClick={readmore}>
                Read 
              </button></>} 

              {
                hide && 
                <button className="btn btn-primary readmore" onClick={Hide}>
                  Hide 
                </button>
              } */}
            </div>
          </div>

          <div className="card-shadow"></div>
        </div>

      </section>
    </>
  );
};

export default Card;
