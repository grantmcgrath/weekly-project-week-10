import React, {Component} from "react";

import {NavLink} from "react-router-dom";

import '../styles/index.css';
import "../styles/App.css";


export default class BaseLayout extends Component {
  render() {
    return (
      <div id="baselayout">
        <nav id="main_nav" className="no">
          <div className="nav_logo link no"><NavLink to="/">iTunes Stuff</NavLink></div>

          <div className="nav_company_info link no"><NavLink to="/About">About</NavLink></div>
          <div className="link no"><NavLink to="/Contact">Contact</NavLink></div>
        </nav>

        <nav id="secondary_nav">
          <div className="link"><NavLink to="/Mac">Mac Apps</NavLink></div>
          <div className="link"><NavLink to="/iOS">iOS Apps</NavLink></div>
          <div className="link"><NavLink to="/Movies">Movies</NavLink></div>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
