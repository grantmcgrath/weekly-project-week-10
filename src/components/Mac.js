import React, {Component} from "react";
import Product from "./Product";

class Mac extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: []
    }
  }

// Fetches Mac App Data from iTunes
componentDidMount() {
  fetch("https://itunes.apple.com/lookup?id=430255202,502401013,409930131")
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      this.setState({item: data.results});
  })
  .catch((error) => {console.log(error);
  })
};

  render() {
    const mac_app = this.state.item.map((app) => {
      return (
        <Product app={app} key={app.trackId} />
      );
    });

    return (

      <div>
        <h1>Mac Apps</h1>
        <section>
          {mac_app}
        </section>
      </div>
    )
  }
}

export default Mac;
