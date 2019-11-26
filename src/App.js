import React, { Component } from 'react';
import './App.scss'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import ComponentSlider from "@kapost/react-component-slider";
import { XYPlot, ContinuousColorLegend } from 'react-vis';
// const renderLeftArrow = () => <i className="fa fa-caret-left" />;
// const renderRightArrow = () => <i className="fa fa-caret-right" />;
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
        <div className="Bar" style={styles}>
          <ComponentSlider onClick={this.slideHandler}>
            <div className="menu-item" id="1980" onClick={this.printYear}>1980</div>
            <div className="menu-item" id="1982" onClick={this.printYear}>1982</div>
            <div className="menu-item" id="1984" onClick={this.printYear}>1984</div>
            <div className="menu-item" id="1986" onClick={this.printYear}>1986</div>
            <div className="menu-item" id="1988" onClick={this.printYear}>1988</div>
            <div className="menu-item" id="1990" onClick={this.printYear}>1990</div>
            <div className="menu-item" id="1992" onClick={this.printYear}>1992</div>
            <div className="menu-item" id="1994" onClick={this.printYear}>1994</div>
            <div className="menu-item" id="1996" onClick={this.printYear}>1996</div>
            <div className="menu-item" id="1998" onClick={this.printYear}>1998</div>
            <div className="menu-item" id="2000" onClick={this.printYear}>2000</div>
            <div className="menu-item" id="2002" onClick={this.printYear}>2002</div>
            <div className="menu-item" id="2004" onClick={this.printYear}>2004</div>
            <div className="menu-item" id="2006" onClick={this.printYear}>2006</div>
            <div className="menu-item" id="2008" onClick={this.printYear}>2008</div>
            <div className="menu-item" id="2010" onClick={this.printYear}>2010</div>
            <div className="menu-item" id="2012" onClick={this.printYear}>2012</div>
            <div className="menu-item" id="2014" onClick={this.printYear}>2014</div>
            <div className="menu-item" id="2016" onClick={this.printYear}>2016</div>
            <div className="menu-item" id="2018" onClick={this.printYear}>2018</div>
            <div className="menu-item" id="2020" onClick={this.printYear}>2020</div>
          </ComponentSlider>
        </div>
      </div>
    );
  }
}

export default App;