import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
    <section className="main-card--cointainer">    
      {menuData.map((curElem) => {
        const {id,name,category,description,image} = curElem;
        return (
          <>

          <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number-cirlce subtle">{id}</span>
                <span className="card-author subtle">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">{description}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  amet molestiae ratione dolor laudantium aperiam voluptates
                  aspernatur a cupiditate eligendi perferendis exercitationem
                  accusamus placeat, expedita veniam non animi fugiat deserunt
                  distinctio dolores libero dolorum dignissimos vitae! Minus
                  blanditiis distinctio ipsum obcaecati, iure incidunt neque
                  ipsa id dolores. Hic, voluptatem sit.
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src= {image} alt="img" className='card-media' />
              <span className="card-tag subtle">Order Now</span>
            </div>
          </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default MenuCard;
