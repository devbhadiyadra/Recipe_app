import React from "react";

const Menucard = ({menuData}) => {
  return (
    <>
      <section className="main-card--cointainer">
      {menuData.map((curElem)=>{
        // De-sturcturing
        const{id,name,category,image,description}=curElem
        return(
          <>
             <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-author subtle">{category}</span>
                  <h2>{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <img src={image} className='card-media' alt='images'/> 
                 
                </div>
              </div>
              <div className="card-shadow"></div>
            </div>
          </>
        )
      })}
      </section>
    </>
  );
};

export default Menucard;
