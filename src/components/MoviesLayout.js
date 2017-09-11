import React from 'react';

// import {Link} from 'react-router-dom';

const MoviesLayout = ({app}) => {
  return (
    <div className="item box">
      <div id="item_image">
        <img src={app.artworkUrl100} alt={app.trackName} className="item_image"/>
      </div>
      <div className="details">
        <h2>{app.trackName}</h2>
        <h3>${app.collectionPrice}</h3>
        <details>
          <summary>Description</summary>
          <p>{app.longDescription}</p>
        </details>
      </div>
    </div>
  )
}

export default MoviesLayout;
