import React, {Component} from "react";
import MoviesLayout from "./MoviesLayout";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: []
    }
  }

// Fetches Movie Data from iTunes
componentDidMount() {
  fetch("https://itunes.apple.com/lookup?id=452283395,452482152,452180809,973589977")
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      this.setState({item: data.results});
  })
  .catch((error) => {console.log(error);
  })
};

  render() {
    const movies = this.state.item.map((app) => {
      return (
        <MoviesLayout app={app} key={app.trackId} />
      );
    });

    return (

      <div>
        <h1>Movies</h1>
        <section>
          {movies}
        </section>
      </div>
    )
  }
}

export default Movies;
