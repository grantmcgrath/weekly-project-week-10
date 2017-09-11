import React, {Component} from "react";
import Product from "./Product";

class iOS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: []
    }
  }

// Fetches mac_app Data
componentDidMount() {
  fetch("https://itunes.apple.com/lookup?id=329913454,949574583,1094591345")
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
        <h1>iOS Apps</h1>
        <section>
          {mac_app}
        </section>
      </div>
    )
  }
}

export default iOS;
