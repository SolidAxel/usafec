import React, { Component } from 'react';
import './App.scss'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import { ContinuousColorLegend } from 'react-vis';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  paddingTop: "10px",
  align: "center",
  width: "1000px",
  paddingLeft: "200px"
};
const legStyle = {
  paddingTop: "15px",
  paddingLeft: "550px"
};

function getColor(demDonations, repDonations) {
  var total = demDonations + repDonations;
  var rgb = "rgb(200,200,200)"; //Default to gray. white is invisible.
  var isRep = false;
  var percentage = 0;

  //Checks if the states donations are primarily republican or democratic.
  if (repDonations > demDonations)
    isRep = true;
  else if (repDonations < demDonations)
    isRep = false;
  else
    return rgb;  //If they are equal then we should return white

  //Next thing to do is find the percentages of dem and rep relative to total.
  //This will tell us how saturated the states color needs to be.
  if (isRep) {
    percentage = repDonations / total;

    // The higher percentage the more saturated the color should be.
    // The higher all of the numbers are, the closer to white the result is.
    if (percentage > .9)
      rgb = "rgb(255,0,0)"  //Fully Red
    else if (percentage > .8)
      rgb = "rgb(255,50,50)"
    else if (percentage > .7)
      rgb = "rgb(255,100,100)"
    else if (percentage > .6)
      rgb = "rgb(255,150,150)"
    else
      rgb = "rgb(255,200,200)"
    // When the value is at 50% then the color should be white. 
    // If it's below then it's the other color.
  }
  else {
    percentage = demDonations / total;
    if (percentage > .9)
      rgb = "rgb(0,0,255)"  //Fully Blue
    else if (percentage > .8)
      rgb = "rgb(50,50,255)"
    else if (percentage > .7)
      rgb = "rgb(100,100,255)"
    else if (percentage > .6)
      rgb = "rgb(150,150,255)"
    else
      rgb = "rgb(200,200,255)"
  }
  getColorbyContribution(1, 1);

  return (rgb);
}

function getColorbyContribution(stateContribution, max) {
  var rgb = "rgb(225,225,225)"; //Default to white
  var percentage = stateContribution / max;

  if (percentage >= 1)
    rgb = "rgb(50,25,0)";
  else if (percentage > .9)
    rgb = "rgb(100,25,0)";
  else if (percentage > .8)
    rgb = "rgb(150,25,0)";
  else if (percentage > .7)
    rgb = "rgb(200,25,0)";
  else if (percentage > .6)
    rgb = "rgb(255,25,0)";
  else if (percentage > .5)
    rgb = "rgb(255,75,0)";
  else if (percentage > .4)
    rgb = "rgb(255,125,0)";
  else if (percentage > .3)
    rgb = "rgb(255,175,0)";
  else if (percentage > .2)
    rgb = "rgb(255,225,0)";
  else if (percentage > .1)
    rgb = "rgb(255,255,0)";
  else
    rgb = "rgb(255,255,100)";

  return (rgb);
}

//Made for the testing of getColor();
function randNum() {
  return Math.random() * 90000;
}

const marks = {
  1980: {
    style: {
      color: 'green',
    },
    label: <strong>1980</strong>,
  },
  1982: {
    style: {
      color: 'green',
    },
    label: <strong>1982</strong>,
  },
  1984: {
    style: {
      color: 'green',
    },
    label: <strong>1984</strong>,
  },
  1986: {
    style: {
      color: 'green',
    },
    label: <strong>1986</strong>,
  },
  1988: {
    style: {
      color: 'green',
    },
    label: <strong>1988</strong>,
  },
  1990: {
    style: {
      color: 'green',
    },
    label: <strong>1990</strong>,
  },
  1992: {
    style: {
      color: 'green',
    },
    label: <strong>1992</strong>,
  },
  1994: {
    style: {
      color: 'green',
    },
    label: <strong>1994</strong>,
  },
  1996: {
    style: {
      color: 'green',
    },
    label: <strong>1996</strong>,
  },
  1998: {
    style: {
      color: 'green',
    },
    label: <strong>1998</strong>,
  },
  2000: {
    style: {
      color: 'green',
    },
    label: <strong>2000</strong>,
  },
  2002: {
    style: {
      color: 'green',
    },
    label: <strong>2002</strong>,
  },
  2004: {
    style: {
      color: 'green',
    },
    label: <strong>2004</strong>,
  },
  2006: {
    style: {
      color: 'green',
    },
    label: <strong>2006</strong>,
  },
  2008: {
    style: {
      color: 'green',
    },
    label: <strong>2008</strong>,
  },
  2010: {
    style: {
      color: 'green',
    },
    label: <strong>2010</strong>,
  },
  2012: {
    style: {
      color: 'green',
    },
    label: <strong>2012</strong>,
  },
  2014: {
    style: {
      color: 'green',
    },
    label: <strong>2014</strong>,
  },
  2016: {
    style: {
      color: 'green',
    },
    label: <strong>2016</strong>,
  },
  2018: {
    style: {
      color: 'green',
    },
    label: <strong>2018</strong>,
  },
  2020: {
    style: {
      color: 'green',
    },
    label: <strong>2020</strong>,
  },
};


class App extends Component {
  state = {
    show: false,
    year: "1979 - 1980",
    e: null,
    state: null,
    data: null,
    politicalGraph: false
  }

  showModal = (stated, name, data) => {
    this.setState({
      show: true,
      e: stated,
      state: name,
      data: data
    });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  setYear = (value) => {
    this.setState({ year: (value - 1) + " - " + value });
    console.log(value);
  }

  sliderLog(value) {
    console.log(value); //eslint-disable-line
    //setYear(value);
  };

  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    if (this.state.politicalGraph) {
      return {
        "NY": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New York", "[1 , 2 , 3 , 4 , 5]")
        },
        "AZ": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Arizona", "[1 , 2 , 3 , 4 , 5]")
        },
        "CA": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "California", "[1 , 2 , 3 , 4 , 5]")
        },
        "NV": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Nevada", "[1 , 2 , 3 , 4 , 5]")
        },
        "AK": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Alaska", "[1 , 2 , 3 , 4 , 5]")
        },
        "HI": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Hawaii", "[1 , 2 , 3 , 4 , 5]")
        },
        "OR": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Oregon", "[1 , 2 , 3 , 4 , 5]")
        },
        "WA": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Washington", "[1 , 2 , 3 , 4 , 5]")
        },
        "ID": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Idaho", "[1 , 2 , 3 , 4 , 5]")
        },
        "MT": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Montana", "[1 , 2 , 3 , 4 , 5]")
        },
        "UT": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Utah", "[1 , 2 , 3 , 4 , 5]")
        },
        "WY": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Wyoming", "[1 , 2 , 3 , 4 , 5]")
        },
        "CO": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Colorado", "[1 , 2 , 3 , 4 , 5]")
        },
        "NM": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Mexico", "[1 , 2 , 3 , 4 , 5]")
        },
        "TX": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Texas", "[1 , 2 , 3 , 4 , 5]")
        },
        "OK": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Oklahoma", "[1 , 2 , 3 , 4 , 5]")
        },
        "KS": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Kansas", "[1 , 2 , 3 , 4 , 5]")
        },
        "NE": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Nebraska", "[1 , 2 , 3 , 4 , 5]")
        },
        "SD": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "South Dakota", "[1 , 2 , 3 , 4 , 5]")
        },
        "ND": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "North Dakota", "[1 , 2 , 3 , 4 , 5]")
        },
        "WI": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Wisconsin", "[1 , 2 , 3 , 4 , 5]")
        },
        "IA": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Iowa", "[1 , 2 , 3 , 4 , 5]")
        },
        "MN": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Minnesota", "[1 , 2 , 3 , 4 , 5]")
        },
        "IL": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Illinois", "[1 , 2 , 3 , 4 , 5]")
        },
        "MO": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Missouri", "[1 , 2 , 3 , 4 , 5]")
        },
        "AR": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Arkansas", "[1 , 2 , 3 , 4 , 5]")
        },
        "LA": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Louisiana", "[1 , 2 , 3 , 4 , 5]")
        },
        "MS": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Mississippi", "[1 , 2 , 3 , 4 , 5]")
        },
        "AL": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Alabama", "[1 , 2 , 3 , 4 , 5]")
        },
        "TN": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Tennessee", "[1 , 2 , 3 , 4 , 5]")
        },
        "KY": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Kentucky", "[1 , 2 , 3 , 4 , 5]")
        },
        "IN": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Indiana", "[1 , 2 , 3 , 4 , 5]")
        },
        "OH": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Ohio", "[1 , 2 , 3 , 4 , 5]")
        },
        "MI": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Michigan", "[1 , 2 , 3 , 4 , 5]")
        },
        "FL": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Florida", "[1 , 2 , 3 , 4 , 5]")
        },
        "GA": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Georgia", "[1 , 2 , 3 , 4 , 5]")
        },
        "SC": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "South Carolina", "[1 , 2 , 3 , 4 , 5]")
        },
        "NC": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "North Carolina", "[1 , 2 , 3 , 4 , 5]")
        },
        "VA": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Virginia", "[1 , 2 , 3 , 4 , 5]")
        },
        "WV": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "West Virginia", "[1 , 2 , 3 , 4 , 5]")
        },
        "MD": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Maryland", "[1 , 2 , 3 , 4 , 5]")
        },
        "DE": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Delaware", "[1 , 2 , 3 , 4 , 5]")
        },
        "PA": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Pennsylvania", "[1 , 2 , 3 , 4 , 5]")
        },
        "NJ": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Jersey", "[1 , 2 , 3 , 4 , 5]")
        },
        "CT": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Connecticut", "[1 , 2 , 3 , 4 , 5]")
        },
        "RI": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Rhode Island", "[1 , 2 , 3 , 4 , 5]")
        },
        "MA": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Massachusetts", "[1 , 2 , 3 , 4 , 5]")
        },
        "VT": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Vermont", "[1 , 2 , 3 , 4 , 5]")
        },
        "NH": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Hampshire", "[1 , 2 , 3 , 4 , 5]")
        },
        "ME": {
          fill: getColor(randNum(), randNum()),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Maine", "[1 , 2 , 3 , 4 , 5]")
        }
      }
    }
    else {
      return {
        "NY": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New York", "[1 , 2 , 3 , 4 , 5]")
        },
        "AZ": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Arizona", "[1 , 2 , 3 , 4 , 5]")
        },
        "CA": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "California", "[1 , 2 , 3 , 4 , 5]")
        },
        "NV": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Nevada", "[1 , 2 , 3 , 4 , 5]")
        },
        "AK": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Alaska", "[1 , 2 , 3 , 4 , 5]")
        },
        "HI": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Hawaii", "[1 , 2 , 3 , 4 , 5]")
        },
        "OR": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Oregon", "[1 , 2 , 3 , 4 , 5]")
        },
        "WA": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Washington", "[1 , 2 , 3 , 4 , 5]")
        },
        "ID": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Idaho", "[1 , 2 , 3 , 4 , 5]")
        },
        "MT": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Montana", "[1 , 2 , 3 , 4 , 5]")
        },
        "UT": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Utah", "[1 , 2 , 3 , 4 , 5]")
        },
        "WY": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Wyoming", "[1 , 2 , 3 , 4 , 5]")
        },
        "CO": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Colorado", "[1 , 2 , 3 , 4 , 5]")
        },
        "NM": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Mexico", "[1 , 2 , 3 , 4 , 5]")
        },
        "TX": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Texas", "[1 , 2 , 3 , 4 , 5]")
        },
        "OK": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Oklahoma", "[1 , 2 , 3 , 4 , 5]")
        },
        "KS": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Kansas", "[1 , 2 , 3 , 4 , 5]")
        },
        "NE": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Nebraska", "[1 , 2 , 3 , 4 , 5]")
        },
        "SD": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "South Dakota", "[1 , 2 , 3 , 4 , 5]")
        },
        "ND": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "North Dakota", "[1 , 2 , 3 , 4 , 5]")
        },
        "WI": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Wisconsin", "[1 , 2 , 3 , 4 , 5]")
        },
        "IA": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Iowa", "[1 , 2 , 3 , 4 , 5]")
        },
        "MN": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Minnesota", "[1 , 2 , 3 , 4 , 5]")
        },
        "IL": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Illinois", "[1 , 2 , 3 , 4 , 5]")
        },
        "MO": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Missouri", "[1 , 2 , 3 , 4 , 5]")
        },
        "AR": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Arkansas", "[1 , 2 , 3 , 4 , 5]")
        },
        "LA": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Louisiana", "[1 , 2 , 3 , 4 , 5]")
        },
        "MS": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Mississippi", "[1 , 2 , 3 , 4 , 5]")
        },
        "AL": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Alabama", "[1 , 2 , 3 , 4 , 5]")
        },
        "TN": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Tennessee", "[1 , 2 , 3 , 4 , 5]")
        },
        "KY": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Kentucky", "[1 , 2 , 3 , 4 , 5]")
        },
        "IN": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Indiana", "[1 , 2 , 3 , 4 , 5]")
        },
        "OH": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Ohio", "[1 , 2 , 3 , 4 , 5]")
        },
        "MI": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Michigan", "[1 , 2 , 3 , 4 , 5]")
        },
        "FL": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Florida", "[1 , 2 , 3 , 4 , 5]")
        },
        "GA": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Georgia", "[1 , 2 , 3 , 4 , 5]")
        },
        "SC": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "South Carolina", "[1 , 2 , 3 , 4 , 5]")
        },
        "NC": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "North Carolina", "[1 , 2 , 3 , 4 , 5]")
        },
        "VA": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Virginia", "[1 , 2 , 3 , 4 , 5]")
        },
        "WV": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "West Virginia", "[1 , 2 , 3 , 4 , 5]")
        },
        "MD": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Maryland", "[1 , 2 , 3 , 4 , 5]")
        },
        "DE": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Delaware", "[1 , 2 , 3 , 4 , 5]")
        },
        "PA": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Pennsylvania", "[1 , 2 , 3 , 4 , 5]")
        },
        "NJ": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Jersey", "[1 , 2 , 3 , 4 , 5]")
        },
        "CT": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Connecticut", "[1 , 2 , 3 , 4 , 5]")
        },
        "RI": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Rhode Island", "[1 , 2 , 3 , 4 , 5]")
        },
        "MA": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Massachusetts", "[1 , 2 , 3 , 4 , 5]")
        },
        "VT": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Vermont", "[1 , 2 , 3 , 4 , 5]")
        },
        "NH": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Hampshire", "[1 , 2 , 3 , 4 , 5]")
        },
        "ME": {
          fill: getColorbyContribution(randNum(), 100000),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Maine", "[1 , 2 , 3 , 4 , 5]")
        }
      }
    }
  };

  render() {
    return (
      <div className="mapContainer">
        <div className="App">
          <h1>
            USA FEC Individual Donations from <year>{this.state.year}</year>
          </h1>
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
          <Modal show={this.state.show} handleClose={this.hideModal}>
            {this.state.e}
            <div></div>
            {this.state.state}
            <div></div>
            {this.state.data}
            <div></div>
          </Modal>
        </div>
        <PoliticalBar show={this.state.politicalGraph}>
          <ContinuousColorLegend
            width={300}
            startTitle="%DEM"
            midTitle="0"
            endTitle="%REP"
            startColor="blue"
            endColor="red"
            midColor="white"
          />
          <div></div>
        </PoliticalBar>
        <DonationBar>
          <ContinuousColorLegend
            width={300}
            startTitle="Lowest"
            endTitle="Highest"
            startColor="rgb(255,255,100)"
            endColor="rgb(50,25,0)"
            midColor="rgb(255,75,0)"
          />
        </DonationBar>
        <div style={styles}>
          <Slider step={2} min={1980} max={2020} onAfterChange={this.setYear} marks={marks} included={false} />
        </div>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName} >
      <section className='modal-main'>
        {children}

        <button
          onClick={handleClose}
        >
          Close
        </button>
      </section>
    </div>
  );
};

const PoliticalBar = ({ show, children }) => {
  if (show) {
    return (
      <div className="Legend" style={legStyle}>
        <section className='political-main'>
          {children}
        </section>
      </div>
    )
  }
  else
    return (<div></div>)
}

const DonationBar = ({ show, children }) => {
  if (!show) {
    return (
      <div className="Legend" style={legStyle}>
        <section className='political-main'>
          {children}
        </section>
      </div>
    )
  }
  else
    return (<div></div>)
}

const container = document.createElement('div');
document.body.appendChild(container);
export default App;