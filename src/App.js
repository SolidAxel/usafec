import React, { Component } from 'react';
import './App.css'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
 
class App extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
 
  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "CA": {
        fill: "blue",
        clickHandler: (event) => console.log('Custom handler for CA', event.target.dataset)
      },
    };
  };
 
  render() {
    return (
      <div align="center" class= "mapContainer">
        <div className="App">
        <h1 align="center">USA FEC Individual Donations from 1980 to 2020</h1>
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
        </div>
      </div>
    );
  }
}
 
export default App;