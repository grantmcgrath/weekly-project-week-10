import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div id="main_page">
        <h1 id="page_header">Check out some of my favorite apps and movies from iTunes.</h1>
        <div className="button_container"><button className="main_page_btn"><Link to="/Mac">Mac Apps</Link></button></div>
        <div className="button_container"><button className="main_page_btn"><Link to="/iOS">iOS Apps</Link></button></div>
        <div className="button_container"><button className="main_page_btn"><Link to="/Movies">Movies</Link></button></div>
      </div>
    );
  }
}

export default App;
