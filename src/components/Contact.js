import React, {Component} from "react";
import "../styles/App.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <form>
         <h1>Contact Info</h1>

         <div id="form_input">
            <input name="name" type="text" placeholder="Name" className="name form" />
            <input name="email" type="email" placeholder="E-mail" className="email form"/>
            <textarea placeholder="What's up?" className="note form"/>
          </div>

          <button>Submit</button>
         </form>
      </div>
    )
  }
}
