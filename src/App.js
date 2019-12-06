import React, { Component } from 'react';
import './App.scss'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import { ContinuousColorLegend } from 'react-vis';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  paddingTop: "10px",
  align: "center",
};

class App extends Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  slideHandler = (event) => {
    alert(console.log("Year", event.target.dataset));
  }
  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "CA": {
        fill: "blue",
        clickHandler: (event) => console.log('Custom handler for CA', event.target.dataset)
      },
    };
  };
  printYear = (e) => {
    console.log(e.target.id);
  }
  render() {
    return (
      <div className="mapContainer">
        <div className="App">
          <h1>USA FEC Individual Donations from 1980 to 2020</h1>
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
        </div>
        <div class="Legend" align = "center">
            <ContinuousColorLegend
              width={300}
              startTitle="%DEM"
              midTitle="0"
              endTitle="%REP"
              startColor="blue"
              endColor="red"
              midColor="white"
            />
        </div>
      </div>
    );
  }
}

export default App;