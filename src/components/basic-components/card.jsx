import React from "react";
import "../css files/card.css";
const Card = () => {
  const temp=()=>{
    alert("click")
  }
  return (
    <>
      <section className="main-card--cointainer">
        <div className="card-container" onClick={temp}>
          <div className="card">
            <div className="card-body">
              <span className="card-author subtle">breakfast</span>
              <h2>samosa</h2>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg" className="card-media" alt="images" />
              <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates tempora tempore incidunt sapiente in sint laboriosam commodi, totam fuga eius nostrum dolores, earum porro modi quis aspernatur. Veniam officia iusto voluptates quaerat maiores ut nemo optio. Expedita, odit ipsum?
              </span>
             
            </div>
          </div>
          <div className="card-shadow"></div>
        </div>

        <div className="card-container" onClick={temp}>
          <div className="card">
            <div className="card-body">
              <span className="card-author subtle">breakfast</span>
              <h2>samosa</h2>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg" className="card-media" alt="images" />
              <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates tempora tempore incidunt sapiente in sint laboriosam commodi, totam fuga eius nostrum dolores, earum porro modi quis aspernatur. Veniam officia iusto voluptates quaerat maiores ut nemo optio. Expedita, odit ipsum?
              </span>
             
            </div>
          </div>
          <div className="card-shadow"></div>
        </div>

        <div className="card-container" onClick={temp}>
          <div className="card">
            <div className="card-body">
              <span className="card-author subtle">breakfast</span>
              <h2>samosa</h2>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg" className="card-media" alt="images" />
              <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates tempora tempore incidunt sapiente in sint laboriosam commodi, totam fuga eius nostrum dolores, earum porro modi quis aspernatur. Veniam officia iusto voluptates quaerat maiores ut nemo optio. Expedita, odit ipsum?
              </span>
             
            </div>
          </div>
          <div className="card-shadow"></div>
        </div>

        <div className="card-container" onClick={temp}>
          <div className="card">
            <div className="card-body">
              <span className="card-author subtle">breakfast</span>
              <h2>samosa</h2>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg" className="card-media" alt="images" />
              <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates tempora tempore incidunt sapiente in sint laboriosam commodi, totam fuga eius nostrum dolores, earum porro modi quis aspernatur. Veniam officia iusto voluptates quaerat maiores ut nemo optio. Expedita, odit ipsum?
              </span>
             
            </div>
          </div>
          <div className="card-shadow"></div>
        </div>

        
      </section>
    </>
  );
};

export default Card;
