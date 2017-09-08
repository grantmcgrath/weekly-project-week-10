import React from 'react';

// import {Link} from 'react-router-dom';

const Product = ({app}) => {
  return (
    <div className="item box">
      <div id="item_image">
        <img src={app.artworkUrl512} alt={app.trackName} className="item_image"/>
      </div>
      <div className="details">
        <h2>{app.trackName}</h2>
        <h3>${app.price}</h3>
        <details>
          <summary>Description</summary>
          <p>{app.description}</p>
        </details>
      </div>
    </div>
  )
}

export default Product;
