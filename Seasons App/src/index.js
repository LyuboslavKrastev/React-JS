import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from './Loader'

class App extends React.Component {
  state = {
    //equivalent  to a constructor
    latitude: null,
    errorMessage: ""
  };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  };

  componentDidUpdate = () => {
    console.log("rerendered");
  };

  renderContent() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <SeasonDisplay latitude = {this.state.latitude}/>;
    }
    if (!this.state.latitude && this.state.errorMessage) {
      return <h2> Error: {this.state.errorMessage}</h2>;
    }
    return <Loader/>
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
