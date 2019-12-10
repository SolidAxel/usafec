import React, { Component } from 'react';
import './App.scss'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import { ContinuousColorLegend } from 'react-vis';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  
  Bar,
  BarChart
} from "recharts";
import data80 from './JSON/1980.json';
import data82 from './JSON/1982.json';
import data84 from './JSON/1984.json';
import data86 from './JSON/1986.json';
import data88 from './JSON/1988.json';
import data90 from './JSON/1990.json';
import data92 from './JSON/1992.json';
import data94 from './JSON/1994.json';
import data96 from './JSON/1996.json';
import data98 from './JSON/1998.json';
import data00 from './JSON/2000.json';
import data02 from './JSON/2002.json';
import data04 from './JSON/2004.json';
import data06 from './JSON/2006.json';
import data08 from './JSON/2008.json';
import data10 from './JSON/2010.json';
import data12 from './JSON/2012.json';
import data14 from './JSON/2014.json';
import data16 from './JSON/2016.json';
import data18 from './JSON/2018.json';
import data20 from './JSON/2020.json';

//import Select from 'react-select';

var dataname;
const sliderBar = {
  fontFamily: "sans-serif",
  textAlign: "center",
  paddingTop: "10px",
  align: "center",
  width: "1000px",
  margin:"0 auto"
};

const colorBar = {
  width: "300px", 
  margin:"0 auto",
  paddingTop:"20px"
};
const Graph = {
  margin:"0 auto",
  paddingTop:"50px"

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

const repRed = "#FF0000"
const demBlue = "#0015BC"

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

const myData = require('./data');

class App extends Component {
  state = {
    show: false,
    year: "1979 - 1980",
    dataset: myData.data1980,
    lineData: data80,
    e: null,
    state: null,
    data: null,
    totalStateDonations: null,
    percentageOfDon: null,
    politicalGraph: true,
  }


  changeData = (year) => {
    if (year === 1980)
      this.setState({ dataset: myData.data1980, lineData: data80});
    else if (year === 1982)
      this.setState({ dataset: myData.data1982, lineData: data82 });
    else if (year === 1984)
      this.setState({ dataset: myData.data1984, lineData: data84 });
    else if (year === 1986)
      this.setState({ dataset: myData.data1986, lineData: data86 });
    else if (year === 1988)
      this.setState({ dataset: myData.data1988, lineData: data88 });
    else if (year === 1990)
      this.setState({ dataset: myData.data1990, lineData: data90 });
    else if (year === 1992)
      this.setState({ dataset: myData.data1992, lineData: data92 });
    else if (year === 1994)
      this.setState({ dataset: myData.data1994, lineData: data94 });
    else if (year === 1996)
      this.setState({ dataset: myData.data1996, lineData: data96 });
    else if (year === 1998)
      this.setState({ dataset: myData.data1998, lineData: data98 });
    else if (year === 2000)
      this.setState({ dataset: myData.data2000, lineData: data00 });
    else if (year === 2002)
      this.setState({ dataset: myData.data2002, lineData: data02 });
    else if (year === 2004)
      this.setState({ dataset: myData.data2004, lineData: data04 });
    else if (year === 2006)
      this.setState({ dataset: myData.data2006, lineData: data06 });
    else if (year === 2008)
      this.setState({ dataset: myData.data2008, lineData: data08 });
    else if (year === 2010)
      this.setState({ dataset: myData.data2010, lineData: data10 });
    else if (year === 2012)
      this.setState({ dataset: myData.data2012, lineData: data12 });
    else if (year === 2014)
      this.setState({ dataset: myData.data2014, lineData: data14 });
    else if (year === 2016)
      this.setState({ dataset: myData.data2016, lineData: data16 });
    else if (year === 2018)
      this.setState({ dataset: myData.data2018, lineData: data18 });
    else
      this.setState({ dataset: myData.data2020, lineData: data20 });
  }

  showModal = (stated, name, data) => {
    this.setState({
      show: true,
      e: stated,
      state: name,
      data: data,
    });
  }

  getPercentage = (dem, rep) => {
    var isRep = false;
    var percentage = 0;

    //Checks if the states donations are primarily republican or democratic.
    if (rep > dem)
      isRep = true;
    else if (rep < dem)
      isRep = false;

    if (isRep)
      percentage = "This state makes up " + (rep / this.state.dataset.totalRep * 100).toFixed(2) + "% of Republican Donations in the US";
    else
      percentage = "This state makes up " + (dem / this.state.dataset.totalDem * 100).toFixed(2) + "% of Democratic Donations in the US";

    this.setState({percentageOfDon: percentage});
  }

  getTotal = (dem, rep) => {
    var total = "The total contributions of this state was $" + (dem + rep).toFixed(2) +".";
    this.setState({totalStateDonations : total});
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  setYear = (value) => {
    this.setState({ year: (value - 1) + " - " + value });
    this.changeData(value);
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

  manageButton = () => {
    this.setState({ politicalGraph: !this.state.politicalGraph })
  }

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    if (this.state.politicalGraph) {
      return {
        "NY": {
          fill: getColor(this.state.dataset.NY.DemDonations, this.state.dataset.NY.RepDonations),
          hoverHandler: (e) => this.showModal(e.target.dataset.name, "New York", "Graph will go here",
          this.getPercentage(this.state.dataset.NY.DemDonations, this.state.dataset.NY.RepDonations),
          this.getTotal(this.state.dataset.NY.DemDonations, this.state.dataset.NY.RepDonations))
        },
        "AZ": {
          fill: getColor(this.state.dataset.AZ.DemDonations, this.state.dataset.AZ.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Graph will go here",
          this.getPercentage(this.state.dataset.AZ.DemDonations, this.state.dataset.AZ.RepDonations),
          this.getTotal(this.state.dataset.AZ.DemDonations, this.state.dataset.AZ.RepDonations))
        },
        "CA": {
          fill: getColor(this.state.dataset.CA.DemDonations, this.state.dataset.CA.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "California", "Graph will go here",
          this.getPercentage(this.state.dataset.CA.DemDonations, this.state.dataset.CA.RepDonations),
          this.getTotal(this.state.dataset.CA.DemDonations, this.state.dataset.CA.RepDonations))
        },
        "NV": {
          fill: getColor(this.state.dataset.NV.DemDonations, this.state.dataset.NV.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Nevada", "Graph will go here",
          this.getPercentage(this.state.dataset.NV.DemDonations, this.state.dataset.NV.RepDonations),
          this.getTotal(this.state.dataset.NV.DemDonations, this.state.dataset.NV.RepDonations))
        },
        "AK": {
          fill: getColor(this.state.dataset.AK.DemDonations, this.state.dataset.AK.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Alaska", "Graph will go here",
          this.getPercentage(this.state.dataset.AK.DemDonations, this.state.dataset.AK.RepDonations),
          this.getTotal(this.state.dataset.AK.DemDonations, this.state.dataset.AK.RepDonations))
        },
        "HI": {
          fill: getColor(this.state.dataset.HI.DemDonations, this.state.dataset.HI.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Hawaii", "Graph will go here",
          this.getPercentage(this.state.dataset.HI.DemDonations, this.state.dataset.HI.RepDonations),
          this.getTotal(this.state.dataset.HI.DemDonations, this.state.dataset.HI.RepDonations))
        },
        "OR": {
          fill: getColor(this.state.dataset.OR.DemDonations, this.state.dataset.OR.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Oregon", "Graph will go here",
          this.getPercentage(this.state.dataset.OR.DemDonations, this.state.dataset.OR.RepDonations),
          this.getTotal(this.state.dataset.OR.DemDonations, this.state.dataset.OR.RepDonations))
        },
        "WA": {
          fill: getColor(this.state.dataset.WA.DemDonations, this.state.dataset.WA.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Washington", "Graph will go here",
          this.getPercentage(this.state.dataset.WA.DemDonations, this.state.dataset.WA.RepDonations),
          this.getTotal(this.state.dataset.WA.DemDonations, this.state.dataset.WA.RepDonations))
        },
        "ID": {
          fill: getColor(this.state.dataset.ID.DemDonations, this.state.dataset.ID.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Idaho", "Graph will go here",
          this.getPercentage(this.state.dataset.ID.DemDonations, this.state.dataset.ID.RepDonations),
          this.getTotal(this.state.dataset.ID.DemDonations, this.state.dataset.ID.RepDonations))
        },
        "MT": {
          fill: getColor(this.state.dataset.MT.DemDonations, this.state.dataset.MT.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Montana", "Graph will go here",
          this.getPercentage(this.state.dataset.MT.DemDonations, this.state.dataset.MT.RepDonations),
          this.getTotal(this.state.dataset.MT.DemDonations, this.state.dataset.MT.RepDonations))
        },
        "UT": {
          fill: getColor(this.state.dataset.UT.DemDonations, this.state.dataset.UT.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Utah", "Graph will go here",
          this.getPercentage(this.state.dataset.UT.DemDonations, this.state.dataset.UT.RepDonations),
          this.getTotal(this.state.dataset.UT.DemDonations, this.state.dataset.UT.RepDonations))
        },
        "WY": {
          fill: getColor(this.state.dataset.WY.DemDonations, this.state.dataset.WY.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Wyoming", "Graph will go here",
          this.getPercentage(this.state.dataset.WY.DemDonations, this.state.dataset.WY.RepDonations),
          this.getTotal(this.state.dataset.WY.DemDonations, this.state.dataset.WY.RepDonations))
        },
        "CO": {
          fill: getColor(this.state.dataset.CO.DemDonations, this.state.dataset.CO.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Colorado", "Graph will go here",
          this.getPercentage(this.state.dataset.CO.DemDonations, this.state.dataset.CO.RepDonations),
          this.getTotal(this.state.dataset.CO.DemDonations, this.state.dataset.CO.RepDonations))
        },
        "NM": {
          fill: getColor(this.state.dataset.NM.DemDonations, this.state.dataset.NM.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Mexico", "Graph will go here",
          this.getPercentage(this.state.dataset.NM.DemDonations, this.state.dataset.NM.RepDonations),
          this.getTotal(this.state.dataset.NM.DemDonations, this.state.dataset.NM.RepDonations))
        },
        "TX": {
          fill: getColor(this.state.dataset.TX.DemDonations, this.state.dataset.TX.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Texas", "Graph will go here",
          this.getPercentage(this.state.dataset.TX.DemDonations, this.state.dataset.TX.RepDonations),
          this.getTotal(this.state.dataset.TX.DemDonations, this.state.dataset.TX.RepDonations))
        },
        "OK": {
          fill: getColor(this.state.dataset.OK.DemDonations, this.state.dataset.OK.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Oklahoma", "Graph will go here",
          this.getPercentage(this.state.dataset.OK.DemDonations, this.state.dataset.OK.RepDonations),
          this.getTotal(this.state.dataset.OK.DemDonations, this.state.dataset.OK.RepDonations))
        },
        "KS": {
          fill: getColor(this.state.dataset.KS.DemDonations, this.state.dataset.KS.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Kansas", "Graph will go here",
          this.getPercentage(this.state.dataset.KS.DemDonations, this.state.dataset.KS.RepDonations),
          this.getTotal(this.state.dataset.KS.DemDonations, this.state.dataset.KS.RepDonations))
        },
        "NE": {
          fill: getColor(this.state.dataset.NE.DemDonations, this.state.dataset.NE.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Nebraska", "Graph will go here",
          this.getPercentage(this.state.dataset.NE.DemDonations, this.state.dataset.NE.RepDonations),
          this.getTotal(this.state.dataset.NE.DemDonations, this.state.dataset.NE.RepDonations))
        },
        "SD": {
          fill: getColor(this.state.dataset.SD.DemDonations, this.state.dataset.SD.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "South Dakota", "Graph will go here",
          this.getPercentage(this.state.dataset.SD.DemDonations, this.state.dataset.SD.RepDonations),
          this.getTotal(this.state.dataset.SD.DemDonations, this.state.dataset.SD.RepDonations))
        },
        "ND": {
          fill: getColor(this.state.dataset.ND.DemDonations, this.state.dataset.ND.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "North Dakota", "Graph will go here",
          this.getPercentage(this.state.dataset.ND.DemDonations, this.state.dataset.ND.RepDonations),
          this.getTotal(this.state.dataset.ND.DemDonations, this.state.dataset.ND.RepDonations))
        },
        "WI": {
          fill: getColor(this.state.dataset.WI.DemDonations, this.state.dataset.WI.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Wisconsin", "Graph will go here",
          this.getPercentage(this.state.dataset.WI.DemDonations, this.state.dataset.WI.RepDonations),
          this.getTotal(this.state.dataset.WI.DemDonations, this.state.dataset.WI.RepDonations))
        },
        "IA": {
          fill: getColor(this.state.dataset.IA.DemDonations, this.state.dataset.IA.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Iowa", "Graph will go here",
          this.getPercentage(this.state.dataset.IA.DemDonations, this.state.dataset.IA.RepDonations),
          this.getTotal(this.state.dataset.IA.DemDonations, this.state.dataset.IA.RepDonations))
        },
        "MN": {
          fill: getColor(this.state.dataset.MN.DemDonations, this.state.dataset.MN.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Minnesota", "Graph will go here",
          this.getPercentage(this.state.dataset.MN.DemDonations, this.state.dataset.MN.RepDonations),
          this.getTotal(this.state.dataset.MN.DemDonations, this.state.dataset.MN.RepDonations))
        },
        "IL": {
          fill: getColor(this.state.dataset.IL.DemDonations, this.state.dataset.IL.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Illinois", "Graph will go here",
          this.getPercentage(this.state.dataset.IL.DemDonations, this.state.dataset.IL.RepDonations),
          this.getTotal(this.state.dataset.IL.DemDonations, this.state.dataset.IL.RepDonations))
        },
        "MO": {
          fill: getColor(this.state.dataset.MO.DemDonations, this.state.dataset.MO.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Missouri", "Graph will go here",
          this.getPercentage(this.state.dataset.MO.DemDonations, this.state.dataset.MO.RepDonations),
          this.getTotal(this.state.dataset.MO.DemDonations, this.state.dataset.MO.RepDonations))
        },
        "AR": {
          fill: getColor(this.state.dataset.AR.DemDonations, this.state.dataset.AR.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Arkansas", "Graph will go here",
          this.getPercentage(this.state.dataset.AR.DemDonations, this.state.dataset.AR.RepDonations),
          this.getTotal(this.state.dataset.AR.DemDonations, this.state.dataset.AR.RepDonations))
        },
        "LA": {
          fill: getColor(this.state.dataset.LA.DemDonations, this.state.dataset.LA.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Louisiana", "Graph will go here",
          this.getPercentage(this.state.dataset.LA.DemDonations, this.state.dataset.LA.RepDonations),
          this.getTotal(this.state.dataset.LA.DemDonations, this.state.dataset.LA.RepDonations))
        },
        "MS": {
          fill: getColor(this.state.dataset.MS.DemDonations, this.state.dataset.MS.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Mississippi", "Graph will go here",
          this.getPercentage(this.state.dataset.MS.DemDonations, this.state.dataset.MS.RepDonations),
          this.getTotal(this.state.dataset.MS.DemDonations, this.state.dataset.MS.RepDonations))
        },
        "AL": {
          fill: getColor(this.state.dataset.AL.DemDonations, this.state.dataset.AL.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Alabama", "Graph will go here",
          this.getPercentage(this.state.dataset.AL.DemDonations, this.state.dataset.AL.RepDonations),
          this.getTotal(this.state.dataset.AL.DemDonations, this.state.dataset.AL.RepDonations))
        },
        "TN": {
          fill: getColor(this.state.dataset.TN.DemDonations, this.state.dataset.TN.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Tennessee", "Graph will go here",
          this.getPercentage(this.state.dataset.TN.DemDonations, this.state.dataset.TN.RepDonations),
          this.getTotal(this.state.dataset.TN.DemDonations, this.state.dataset.TN.RepDonations))
        },
        "KY": {
          fill: getColor(this.state.dataset.KY.DemDonations, this.state.dataset.KY.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Kentucky", "Graph will go here",
          this.getPercentage(this.state.dataset.KY.DemDonations, this.state.dataset.KY.RepDonations),
          this.getTotal(this.state.dataset.KY.DemDonations, this.state.dataset.KY.RepDonations))
        },
        "IN": {
          fill: getColor(this.state.dataset.IN.DemDonations, this.state.dataset.IN.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Indiana", "Graph will go here",
          this.getPercentage(this.state.dataset.IN.DemDonations, this.state.dataset.IN.RepDonations),
          this.getTotal(this.state.dataset.IN.DemDonations, this.state.dataset.IN.RepDonations))
        },
        "OH": {
          fill: getColor(this.state.dataset.OH.DemDonations, this.state.dataset.OH.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Ohio", "Graph will go here",
          this.getPercentage(this.state.dataset.OH.DemDonations, this.state.dataset.OH.RepDonations),
          this.getTotal(this.state.dataset.OH.DemDonations, this.state.dataset.OH.RepDonations))
        },
        "MI": {
          fill: getColor(this.state.dataset.MI.DemDonations, this.state.dataset.MI.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Michigan", "Graph will go here",
          this.getPercentage(this.state.dataset.MI.DemDonations, this.state.dataset.MI.RepDonations),
          this.getTotal(this.state.dataset.MI.DemDonations, this.state.dataset.MI.RepDonations))
        },
        "FL": {
          fill: getColor(this.state.dataset.FL.DemDonations, this.state.dataset.FL.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Florida", "Graph will go here",
          this.getPercentage(this.state.dataset.FL.DemDonations, this.state.dataset.FL.RepDonations),
          this.getTotal(this.state.dataset.FL.DemDonations, this.state.dataset.FL.RepDonations))
        },
        "GA": {
          fill: getColor(this.state.dataset.GA.DemDonations, this.state.dataset.GA.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Georgia", "Graph will go here",
          this.getPercentage(this.state.dataset.GA.DemDonations, this.state.dataset.GA.RepDonations),
          this.getTotal(this.state.dataset.GA.DemDonations, this.state.dataset.GA.RepDonations))
        },
        "SC": {
          fill: getColor(this.state.dataset.SC.DemDonations, this.state.dataset.SC.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "South Carolina", "Graph will go here",
          this.getPercentage(this.state.dataset.SC.DemDonations, this.state.dataset.SC.RepDonations),
          this.getTotal(this.state.dataset.SC.DemDonations, this.state.dataset.SC.RepDonations))
        },
        "NC": {
          fill: getColor(this.state.dataset.NC.DemDonations, this.state.dataset.NC.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "North Carolina", "Graph will go here",
          this.getPercentage(this.state.dataset.NC.DemDonations, this.state.dataset.NC.RepDonations),
          this.getTotal(this.state.dataset.NC.DemDonations, this.state.dataset.NC.RepDonations))
        },
        "VA": {
          fill: getColor(this.state.dataset.VA.DemDonations, this.state.dataset.VA.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Virginia", "Graph will go here",
          this.getPercentage(this.state.dataset.VA.DemDonations, this.state.dataset.VA.RepDonations),
          this.getTotal(this.state.dataset.VA.DemDonations, this.state.dataset.VA.RepDonations))
        },
        "WV": {
          fill: getColor(this.state.dataset.WV.DemDonations, this.state.dataset.WV.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "West Virginia", "Graph will go here",
          this.getPercentage(this.state.dataset.WV.DemDonations, this.state.dataset.WV.RepDonations),
          this.getTotal(this.state.dataset.WV.DemDonations, this.state.dataset.WV.RepDonations))
        },
        "MD": {
          fill: getColor(this.state.dataset.MD.DemDonations, this.state.dataset.MD.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Maryland", "Graph will go here",
          this.getPercentage(this.state.dataset.MD.DemDonations, this.state.dataset.MD.RepDonations),
          this.getTotal(this.state.dataset.MD.DemDonations, this.state.dataset.MD.RepDonations))
        },
        "DE": {
          fill: getColor(this.state.dataset.DE.DemDonations, this.state.dataset.DE.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Delaware", "Graph will go here",
          this.getPercentage(this.state.dataset.DE.DemDonations, this.state.dataset.DE.RepDonations),
          this.getTotal(this.state.dataset.DE.DemDonations, this.state.dataset.DE.RepDonations))
        },
        "PA": {
          fill: getColor(this.state.dataset.PA.DemDonations, this.state.dataset.PA.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Pennsylvania", "Graph will go here",
          this.getPercentage(this.state.dataset.PA.DemDonations, this.state.dataset.PA.RepDonations),
          this.getTotal(this.state.dataset.PA.DemDonations, this.state.dataset.PA.RepDonations))
        },
        "NJ": {
          fill: getColor(this.state.dataset.NJ.DemDonations, this.state.dataset.NJ.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Jersey", "Graph will go here",
          this.getPercentage(this.state.dataset.NJ.DemDonations, this.state.dataset.NJ.RepDonations),
          this.getTotal(this.state.dataset.NJ.DemDonations, this.state.dataset.NJ.RepDonations))
        },
        "CT": {
          fill: getColor(this.state.dataset.CT.DemDonations, this.state.dataset.CT.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Connecticut", "Graph will go here",
          this.getPercentage(this.state.dataset.CT.DemDonations, this.state.dataset.CT.RepDonations),
          this.getTotal(this.state.dataset.CT.DemDonations, this.state.dataset.CT.RepDonations))
        },
        "RI": {
          fill: getColor(this.state.dataset.RI.DemDonations, this.state.dataset.RI.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Rhode Island", "Graph will go here",
          this.getPercentage(this.state.dataset.RI.DemDonations, this.state.dataset.RI.RepDonations),
          this.getTotal(this.state.dataset.RI.DemDonations, this.state.dataset.RI.RepDonations))
        },
        "MA": {
          fill: getColor(this.state.dataset.MA.DemDonations, this.state.dataset.MA.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Massachusetts", "Graph will go here",
          this.getPercentage(this.state.dataset.MA.DemDonations, this.state.dataset.MA.RepDonations),
          this.getTotal(this.state.dataset.MA.DemDonations, this.state.dataset.MA.RepDonations))
        },
        "VT": {
          fill: getColor(this.state.dataset.VT.DemDonations, this.state.dataset.VT.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Vermont", "Graph will go here",
          this.getPercentage(this.state.dataset.VT.DemDonations, this.state.dataset.VT.RepDonations),
          this.getTotal(this.state.dataset.VT.DemDonations, this.state.dataset.VT.RepDonations))
        },
        "NH": {
          fill: getColor(this.state.dataset.NH.DemDonations, this.state.dataset.NH.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Hampshire", "Graph will go here",
          this.getPercentage(this.state.dataset.NH.DemDonations, this.state.dataset.NH.RepDonations),
          this.getTotal(this.state.dataset.NH.DemDonations, this.state.dataset.NH.RepDonations))
        },
        "ME": {
          fill: getColor(this.state.dataset.ME.DemDonations, this.state.dataset.ME.RepDonations),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Maine", "Graph will go here",
          this.getPercentage(this.state.dataset.ME.DemDonations, this.state.dataset.ME.RepDonations),
          this.getTotal(this.state.dataset.ME.DemDonations, this.state.dataset.ME.RepDonations))
        }
      }
    }
    else {
      return {
        "NY": {
          fill: getColorbyContribution(Math.max(this.state.dataset.NY.DemDonations, this.state.dataset.NY.RepDonations), this.state.dataset.max),
          hoverHandler: (e) => this.showModal(e.target.dataset.name, "New York", "Graph will go here",
          this.getPercentage(this.state.dataset.NY.DemDonations, this.state.dataset.NY.RepDonations),
          this.getTotal(this.state.dataset.NY.DemDonations, this.state.dataset.NY.RepDonations))
        },
        "AZ": {
          fill: getColorbyContribution(Math.max(this.state.dataset.AZ.DemDonations, this.state.dataset.AZ.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Arizona", "Graph will go here",
          this.getPercentage(this.state.dataset.AZ.DemDonations, this.state.dataset.AZ.RepDonations),
          this.getTotal(this.state.dataset.AZ.DemDonations, this.state.dataset.AZ.RepDonations))
        },
        "CA": {
          fill: getColorbyContribution(Math.max(this.state.dataset.CA.DemDonations, this.state.dataset.CA.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "California", "Graph will go here",
          this.getPercentage(this.state.dataset.CA.DemDonations, this.state.dataset.CA.RepDonations),
          this.getTotal(this.state.dataset.CA.DemDonations, this.state.dataset.CA.RepDonations))
        },
        "NV": {
          fill: getColorbyContribution(Math.max(this.state.dataset.NV.DemDonations, this.state.dataset.NV.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Nevada", "Graph will go here",
          this.getPercentage(this.state.dataset.NV.DemDonations, this.state.dataset.NV.RepDonations),
          this.getTotal(this.state.dataset.NV.DemDonations, this.state.dataset.NV.RepDonations))
        },
        "AK": {
          fill: getColorbyContribution(Math.max(this.state.dataset.AK.DemDonations, this.state.dataset.AK.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Alaska", "Graph will go here",
          this.getPercentage(this.state.dataset.AK.DemDonations, this.state.dataset.AK.RepDonations),
          this.getTotal(this.state.dataset.AK.DemDonations, this.state.dataset.AK.RepDonations))
        },
        "HI": {
          fill: getColorbyContribution(Math.max(this.state.dataset.HI.DemDonations, this.state.dataset.HI.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Hawaii", "Graph will go here",
          this.getPercentage(this.state.dataset.HI.DemDonations, this.state.dataset.HI.RepDonations),
          this.getTotal(this.state.dataset.HI.DemDonations, this.state.dataset.HI.RepDonations))
        },
        "OR": {
          fill: getColorbyContribution(Math.max(this.state.dataset.OR.DemDonations, this.state.dataset.OR.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Oregon", "Graph will go here",
          this.getPercentage(this.state.dataset.OR.DemDonations, this.state.dataset.OR.RepDonations),
          this.getTotal(this.state.dataset.OR.DemDonations, this.state.dataset.OR.RepDonations))
        },
        "WA": {
          fill: getColorbyContribution(Math.max(this.state.dataset.WA.DemDonations, this.state.dataset.WA.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Washington", "Graph will go here",
          this.getPercentage(this.state.dataset.WA.DemDonations, this.state.dataset.WA.RepDonations),
          this.getTotal(this.state.dataset.WA.DemDonations, this.state.dataset.WA.RepDonations))
        },
        "ID": {
          fill: getColorbyContribution(Math.max(this.state.dataset.ID.DemDonations, this.state.dataset.ID.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Idaho", "Graph will go here",
          this.getPercentage(this.state.dataset.ID.DemDonations, this.state.dataset.ID.RepDonations),
          this.getTotal(this.state.dataset.ID.DemDonations, this.state.dataset.ID.RepDonations))
        },
        "MT": {
          fill: getColorbyContribution(Math.max(this.state.dataset.MT.DemDonations, this.state.dataset.MT.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Montana", "Graph will go here",
          this.getPercentage(this.state.dataset.MT.DemDonations, this.state.dataset.MT.RepDonations),
          this.getTotal(this.state.dataset.MT.DemDonations, this.state.dataset.MT.RepDonations))
        },
        "UT": {
          fill: getColorbyContribution(Math.max(this.state.dataset.UT.DemDonations, this.state.dataset.UT.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Utah", "Graph will go here",
          this.getPercentage(this.state.dataset.UT.DemDonations, this.state.dataset.UT.RepDonations),
          this.getTotal(this.state.dataset.UT.DemDonations, this.state.dataset.UT.RepDonations))
        },
        "WY": {
          fill: getColorbyContribution(Math.max(this.state.dataset.WY.DemDonations, this.state.dataset.WY.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Wyoming", "Graph will go here",
          this.getPercentage(this.state.dataset.WY.DemDonations, this.state.dataset.WY.RepDonations),
          this.getTotal(this.state.dataset.WY.DemDonations, this.state.dataset.WY.RepDonations))
        },
        "CO": {
          fill: getColorbyContribution(Math.max(this.state.dataset.CO.DemDonations, this.state.dataset.CO.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Colorado", "Graph will go here",
          this.getPercentage(this.state.dataset.CO.DemDonations, this.state.dataset.CO.RepDonations),
          this.getTotal(this.state.dataset.CO.DemDonations, this.state.dataset.CO.RepDonations))
        },
        "NM": {
          fill: getColorbyContribution(Math.max(this.state.dataset.NM.DemDonations, this.state.dataset.NM.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Mexico", "Graph will go here",
          this.getPercentage(this.state.dataset.NM.DemDonations, this.state.dataset.NM.RepDonations),
          this.getTotal(this.state.dataset.NM.DemDonations, this.state.dataset.NM.RepDonations))
        },
        "TX": {
          fill: getColorbyContribution(Math.max(this.state.dataset.TX.DemDonations, this.state.dataset.TX.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Texas", "Graph will go here",
          this.getPercentage(this.state.dataset.TX.DemDonations, this.state.dataset.TX.RepDonations),
          this.getTotal(this.state.dataset.TX.DemDonations, this.state.dataset.TX.RepDonations))
        },
        "OK": {
          fill: getColorbyContribution(Math.max(this.state.dataset.OK.DemDonations, this.state.dataset.OK.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Oklahoma", "Graph will go here",
          this.getPercentage(this.state.dataset.OK.DemDonations, this.state.dataset.OK.RepDonations),
          this.getTotal(this.state.dataset.OK.DemDonations, this.state.dataset.OK.RepDonations))
        },
        "KS": {
          fill: getColorbyContribution(Math.max(this.state.dataset.KS.DemDonations, this.state.dataset.KS.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Kansas", "Graph will go here",
          this.getPercentage(this.state.dataset.KS.DemDonations, this.state.dataset.KS.RepDonations),
          this.getTotal(this.state.dataset.KS.DemDonations, this.state.dataset.KS.RepDonations))
        },
        "NE": {
          fill: getColorbyContribution(Math.max(this.state.dataset.NE.DemDonations, this.state.dataset.NE.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Nebraska", "Graph will go here",
          this.getPercentage(this.state.dataset.NE.DemDonations, this.state.dataset.NE.RepDonations),
          this.getTotal(this.state.dataset.NE.DemDonations, this.state.dataset.NE.RepDonations))
        },
        "SD": {
          fill: getColorbyContribution(Math.max(this.state.dataset.SD.DemDonations, this.state.dataset.SD.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "South Dakota", "Graph will go here",
          this.getPercentage(this.state.dataset.SD.DemDonations, this.state.dataset.SD.RepDonations),
          this.getTotal(this.state.dataset.SD.DemDonations, this.state.dataset.SD.RepDonations))
        },
        "ND": {
          fill: getColorbyContribution(Math.max(this.state.dataset.ND.DemDonations, this.state.dataset.ND.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "North Dakota", "Graph will go here",
          this.getPercentage(this.state.dataset.ND.DemDonations, this.state.dataset.ND.RepDonations),
          this.getTotal(this.state.dataset.ND.DemDonations, this.state.dataset.ND.RepDonations))
        },
        "WI": {
          fill: getColorbyContribution(Math.max(this.state.dataset.WI.DemDonations, this.state.dataset.WI.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Wisconsin", "Graph will go here",
          this.getPercentage(this.state.dataset.WI.DemDonations, this.state.dataset.WI.RepDonations),
          this.getTotal(this.state.dataset.WI.DemDonations, this.state.dataset.WI.RepDonations))
        },
        "IA": {
          fill: getColorbyContribution(Math.max(this.state.dataset.IA.DemDonations, this.state.dataset.IA.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Iowa", "Graph will go here",
          this.getPercentage(this.state.dataset.IA.DemDonations, this.state.dataset.IA.RepDonations),
          this.getTotal(this.state.dataset.IA.DemDonations, this.state.dataset.IA.RepDonations))
        },
        "MN": {
          fill: getColorbyContribution(Math.max(this.state.dataset.MN.DemDonations, this.state.dataset.MN.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Minnesota", "Graph will go here",
          this.getPercentage(this.state.dataset.MN.DemDonations, this.state.dataset.MN.RepDonations),
          this.getTotal(this.state.dataset.MN.DemDonations, this.state.dataset.MN.RepDonations))
        },
        "IL": {
          fill: getColorbyContribution(Math.max(this.state.dataset.IL.DemDonations, this.state.dataset.IL.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Illinois", "Graph will go here",
          this.getPercentage(this.state.dataset.IL.DemDonations, this.state.dataset.IL.RepDonations),
          this.getTotal(this.state.dataset.IL.DemDonations, this.state.dataset.IL.RepDonations))
        },
        "MO": {
          fill: getColorbyContribution(Math.max(this.state.dataset.MO.DemDonations, this.state.dataset.MO.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Missouri", "Graph will go here",
          this.getPercentage(this.state.dataset.MO.DemDonations, this.state.dataset.MO.RepDonations),
          this.getTotal(this.state.dataset.MO.DemDonations, this.state.dataset.MO.RepDonations))
        },
        "AR": {
          fill: getColorbyContribution(Math.max(this.state.dataset.AR.DemDonations, this.state.dataset.AR.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Arkansas", "Graph will go here",
          this.getPercentage(this.state.dataset.AR.DemDonations, this.state.dataset.AR.RepDonations),
          this.getTotal(this.state.dataset.AR.DemDonations, this.state.dataset.AR.RepDonations))
        },
        "LA": {
          fill: getColorbyContribution(Math.max(this.state.dataset.LA.DemDonations, this.state.dataset.LA.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Louisiana", "Graph will go here",
          this.getPercentage(this.state.dataset.LA.DemDonations, this.state.dataset.LA.RepDonations),
          this.getTotal(this.state.dataset.LA.DemDonations, this.state.dataset.LA.RepDonations))
        },
        "MS": {
          fill: getColorbyContribution(Math.max(this.state.dataset.MS.DemDonations, this.state.dataset.MS.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Mississippi", "Graph will go here",
          this.getPercentage(this.state.dataset.MS.DemDonations, this.state.dataset.MS.RepDonations),
          this.getTotal(this.state.dataset.MS.DemDonations, this.state.dataset.MS.RepDonations))
        },
        "AL": {
          fill: getColorbyContribution(Math.max(this.state.dataset.AL.DemDonations, this.state.dataset.AL.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Alabama", "Graph will go here",
          this.getPercentage(this.state.dataset.AL.DemDonations, this.state.dataset.AL.RepDonations),
          this.getTotal(this.state.dataset.AL.DemDonations, this.state.dataset.AL.RepDonations))
        },
        "TN": {
          fill: getColorbyContribution(Math.max(this.state.dataset.TN.DemDonations, this.state.dataset.TN.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Tennessee", "Graph will go here",
          this.getPercentage(this.state.dataset.TN.DemDonations, this.state.dataset.TN.RepDonations),
          this.getTotal(this.state.dataset.TN.DemDonations, this.state.dataset.TN.RepDonations))
        },
        "KY": {
          fill: getColorbyContribution(Math.max(this.state.dataset.KY.DemDonations, this.state.dataset.KY.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Kentucky", "Graph will go here",
          this.getPercentage(this.state.dataset.KY.DemDonations, this.state.dataset.KY.RepDonations),
          this.getTotal(this.state.dataset.KY.DemDonations, this.state.dataset.KY.RepDonations))
        },
        "IN": {
          fill: getColorbyContribution(Math.max(this.state.dataset.IN.DemDonations, this.state.dataset.IN.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Indiana", "Graph will go here",
          this.getPercentage(this.state.dataset.IN.DemDonations, this.state.dataset.IN.RepDonations),
          this.getTotal(this.state.dataset.IN.DemDonations, this.state.dataset.IN.RepDonations))
        },
        "OH": {
          fill: getColorbyContribution(Math.max(this.state.dataset.OH.DemDonations, this.state.dataset.OH.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Ohio", "Graph will go here",
          this.getPercentage(this.state.dataset.OH.DemDonations, this.state.dataset.OH.RepDonations),
          this.getTotal(this.state.dataset.OH.DemDonations, this.state.dataset.OH.RepDonations))
        },
        "MI": {
          fill: getColorbyContribution(Math.max(this.state.dataset.MI.DemDonations, this.state.dataset.MI.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Michigan", "Graph will go here",
          this.getPercentage(this.state.dataset.MI.DemDonations, this.state.dataset.MI.RepDonations),
          this.getTotal(this.state.dataset.MI.DemDonations, this.state.dataset.MI.RepDonations))
        },
        "FL": {
          fill: getColorbyContribution(Math.max(this.state.dataset.FL.DemDonations, this.state.dataset.FL.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Florida", "Graph will go here",
          this.getPercentage(this.state.dataset.FL.DemDonations, this.state.dataset.FL.RepDonations),
          this.getTotal(this.state.dataset.FL.DemDonations, this.state.dataset.FL.RepDonations))
        },
        "GA": {
          fill: getColorbyContribution(Math.max(this.state.dataset.GA.DemDonations, this.state.dataset.GA.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Georgia", "Graph will go here",
          this.getPercentage(this.state.dataset.GA.DemDonations, this.state.dataset.GA.RepDonations),
          this.getTotal(this.state.dataset.GA.DemDonations, this.state.dataset.GA.RepDonations))
        },
        "SC": {
          fill: getColorbyContribution(Math.max(this.state.dataset.SC.DemDonations, this.state.dataset.SC.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "South Carolina", "Graph will go here",
          this.getPercentage(this.state.dataset.SC.DemDonations, this.state.dataset.SC.RepDonations),
          this.getTotal(this.state.dataset.SC.DemDonations, this.state.dataset.SC.RepDonations))
        },
        "NC": {
          fill: getColorbyContribution(Math.max(this.state.dataset.NC.DemDonations, this.state.dataset.NC.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "North Carolina", "Graph will go here",
          this.getPercentage(this.state.dataset.NC.DemDonations, this.state.dataset.NC.RepDonations),
          this.getTotal(this.state.dataset.NC.DemDonations, this.state.dataset.NC.RepDonations))
        },
        "VA": {
          fill: getColorbyContribution(Math.max(this.state.dataset.VA.DemDonations, this.state.dataset.VA.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Virginia", "Graph will go here",
          this.getPercentage(this.state.dataset.VA.DemDonations, this.state.dataset.VA.RepDonations),
          this.getTotal(this.state.dataset.VA.DemDonations, this.state.dataset.VA.RepDonations))
        },
        "WV": {
          fill: getColorbyContribution(Math.max(this.state.dataset.WV.DemDonations, this.state.dataset.WV.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "West Virginia", "Graph will go here",
          this.getPercentage(this.state.dataset.WV.DemDonations, this.state.dataset.WV.RepDonations),
          this.getTotal(this.state.dataset.WV.DemDonations, this.state.dataset.WV.RepDonations))
        },
        "MD": {
          fill: getColorbyContribution(Math.max(this.state.dataset.MD.DemDonations, this.state.dataset.MD.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Maryland", "Graph will go here",
          this.getPercentage(this.state.dataset.MD.DemDonations, this.state.dataset.MD.RepDonations),
          this.getTotal(this.state.dataset.MD.DemDonations, this.state.dataset.MD.RepDonations))
        },
        "DE": {
          fill: getColorbyContribution(Math.max(this.state.dataset.DE.DemDonations, this.state.dataset.DE.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Delaware", "Graph will go here",
          this.getPercentage(this.state.dataset.DE.DemDonations, this.state.dataset.DE.RepDonations),
          this.getTotal(this.state.dataset.DE.DemDonations, this.state.dataset.DE.RepDonations))
        },
        "PA": {
          fill: getColorbyContribution(Math.max(this.state.dataset.PA.DemDonations, this.state.dataset.PA.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Pennsylvania", "Graph will go here",
          this.getPercentage(this.state.dataset.PA.DemDonations, this.state.dataset.PA.RepDonations),
          this.getTotal(this.state.dataset.PA.DemDonations, this.state.dataset.PA.RepDonations))
        },
        "NJ": {
          fill: getColorbyContribution(Math.max(this.state.dataset.NJ.DemDonations, this.state.dataset.NJ.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Jersey", "Graph will go here",
          this.getPercentage(this.state.dataset.NJ.DemDonations, this.state.dataset.NJ.RepDonations),
          this.getTotal(this.state.dataset.NJ.DemDonations, this.state.dataset.NJ.RepDonations))
        },
        "CT": {
          fill: getColorbyContribution(Math.max(this.state.dataset.CT.DemDonations, this.state.dataset.CT.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Connecticut", "Graph will go here",
          this.getPercentage(this.state.dataset.CT.DemDonations, this.state.dataset.CT.RepDonations),
          this.getTotal(this.state.dataset.CT.DemDonations, this.state.dataset.CT.RepDonations))
        },
        "RI": {
          fill: getColorbyContribution(Math.max(this.state.dataset.RI.DemDonations, this.state.dataset.RI.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Rhode Island", "Graph will go here",
          this.getPercentage(this.state.dataset.RI.DemDonations, this.state.dataset.RI.RepDonations),
          this.getTotal(this.state.dataset.RI.DemDonations, this.state.dataset.RI.RepDonations))
        },
        "MA": {
          fill: getColorbyContribution(Math.max(this.state.dataset.MA.DemDonations, this.state.dataset.MA.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Massachusetts", "Graph will go here",
          this.getPercentage(this.state.dataset.MA.DemDonations, this.state.dataset.MA.RepDonations),
          this.getTotal(this.state.dataset.MA.DemDonations, this.state.dataset.MA.RepDonations))
        },
        "VT": {
          fill: getColorbyContribution(Math.max(this.state.dataset.VT.DemDonations, this.state.dataset.VT.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Vermont", "Graph will go here",
          this.getPercentage(this.state.dataset.VT.DemDonations, this.state.dataset.VT.RepDonations),
          this.getTotal(this.state.dataset.VT.DemDonations, this.state.dataset.VT.RepDonations))
        },
        "NH": {
          fill: getColorbyContribution(Math.max(this.state.dataset.NH.DemDonations, this.state.dataset.NH.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New Hampshire", "Graph will go here",
          this.getPercentage(this.state.dataset.NH.DemDonations, this.state.dataset.NH.RepDonations),
          this.getTotal(this.state.dataset.NH.DemDonations, this.state.dataset.NH.RepDonations))
        },
        "ME": {
          fill: getColorbyContribution(Math.max(this.state.dataset.ME.DemDonations, this.state.dataset.ME.RepDonations), this.state.dataset.max),
          clickHandler: (e) => this.showModal(e.target.dataset.name, "Maine", "Graph will go here",
          this.getPercentage(this.state.dataset.ME.DemDonations, this.state.dataset.ME.RepDonations),
          this.getTotal(this.state.dataset.ME.DemDonations, this.state.dataset.ME.RepDonations))
        }
      }
    }
  };
filterProducts = (e) => {
    //console.log(e.target.value); 
    dataname=e.target.value;
    console.log(dataname)
  }

  render() {
    return (
      <div className="mapContainer" >
        <div className="App">
          <h1>
            USA FEC Individual Donations from <year>{this.state.year}</year>
          </h1>
          <h2><button onClick={this.manageButton}>Change Type of Map</button></h2>
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
          <Modal show={this.state.show} handleClose={this.hideModal}>
            {this.state.state}
            <div></div>
            {this.state.e}
            <div></div>
            {this.state.percentageOfDon}
            <div></div>
            {this.state.totalStateDonations}
            <div></div>
            {this.state.data}
            <div></div>
          </Modal>
        </div>
        <PoliticalBar show={this.state.politicalGraph}>
          <ContinuousColorLegend
            startTitle="%DEM"
            midTitle="0"
            endTitle="%REP"
            startColor={demBlue}
            endColor={repRed}
            midColor="white"
          />
          <div></div>
        </PoliticalBar>
        <DonationBar show={this.state.politicalGraph}>
          <ContinuousColorLegend
            startTitle="Lowest"
            endTitle="Highest"
            startColor="rgb(255,255,100)"
            endColor="rgb(50,25,0)"
            midColor="rgb(255,75,0)"
          />
        </DonationBar>
        <div style={sliderBar}>
          <Slider step={2} min={1980} max={2020} onAfterChange={this.setYear} marks={marks} included={false} />
        </div>
        <div>
          <BarChart width={1200} height={600} style={Graph} data={this.state.lineData} maxBarSize={50} >
            <YAxis tick={<CustomizedYAxisTick/>}/>
            <XAxis dataKey='state' tick={<CustomizedXAxisTick/>} interval = {0}/>
            <Tooltip position={{y: 200}} />
            <CartesianGrid stroke='#f5f5f5'/>
            <Bar dataKey='rep' stackId="a" fill='red' strokeWidth={2} />
            <Bar dataKey='dem' stackId="a" fill='blue' strokeWidth={2} />
          </BarChart>
          </div>
      </div>
    );
  }
}
const CustomizedXAxisTick = () => ({
  render () {
    const {x, y, payload} = this.props;
		
   	return (
    	<g transform={`translate(${x},${y})`}>
        <text x={0} y={4} dy={0} fontSize={15} textAnchor="end" fill="#000" transform="rotate(-90)">{payload.value}</text>
      </g>
    );
  }
});
const CustomizedYAxisTick = () => ({
  render () {
    const {x, y, payload} = this.props;
		
   	return (
    	<g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={3} fontSize={10} textAnchor="end" fill="#000" transform="rotate(0)">{payload.value}</text>
      </g>
    );
  }
});
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
      <div className="Legend" style={colorBar}>
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
      <div className="Legend" style={colorBar}>
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