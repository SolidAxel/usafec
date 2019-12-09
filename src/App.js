import React, { Component } from 'react';
import './App.scss'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";
import { ContinuousColorLegend } from 'react-vis';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './data';

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

var politicalColors = [
  { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0x00 } },
  { pct: 0.5, color: { r: 0xec, g: 0xec, b: 0xec } },
  { pct: 1.0, color: { r: 0x00, g: 0x00, b: 0xff } }];

var getColor = function(demDonations, repDonations) {
  var total = demDonations + repDonations;
  var percentage = demDonations/total;

  for (var i = 1; i < politicalColors.length - 1; i++) {
    if (percentage < politicalColors[i].pct) {
      break
    }
  }

      var lower = politicalColors[i - 1];
      var upper = politicalColors[i];
      var range = upper.pct - lower.pct;
      var rangePct = (percentage - lower.pct) / range;
      var pctLower = 1 - rangePct;
      var pctUpper = rangePct;
      var mycolor = {
        r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
        g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
        b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
      };
    return 'rgb(' + [mycolor.r, mycolor.g, mycolor.b].join(',') + ')';
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
    e: null,
    state: null,
    data: null,
    totalStateDonations: null,
    percentageOfDon: null,
    politicalGraph: true,
  }

  changeData = (year) => {
    if (year === 1980)
      this.setState({ dataset: myData.data1980 });
    else if (year === 1982)
      this.setState({ dataset: myData.data1982 });
    else if (year === 1984)
      this.setState({ dataset: myData.data1984 });
    else if (year === 1986)
      this.setState({ dataset: myData.data1986 });
    else if (year === 1988)
      this.setState({ dataset: myData.data1988 });
    else if (year === 1990)
      this.setState({ dataset: myData.data1990 });
    else if (year === 1992)
      this.setState({ dataset: myData.data1992 });
    else if (year === 1994)
      this.setState({ dataset: myData.data1994 });
    else if (year === 1996)
      this.setState({ dataset: myData.data1996 });
    else if (year === 1998)
      this.setState({ dataset: myData.data1998 });
    else if (year === 2000)
      this.setState({ dataset: myData.data2000 });
    else if (year === 2002)
      this.setState({ dataset: myData.data2002 });
    else if (year === 2004)
      this.setState({ dataset: myData.data2004 });
    else if (year === 2006)
      this.setState({ dataset: myData.data2006 });
    else if (year === 2008)
      this.setState({ dataset: myData.data2008 });
    else if (year === 2010)
      this.setState({ dataset: myData.data2010 });
    else if (year === 2012)
      this.setState({ dataset: myData.data2012 });
    else if (year === 2014)
      this.setState({ dataset: myData.data2014 });
    else if (year === 2016)
      this.setState({ dataset: myData.data2016 });
    else if (year === 2018)
      this.setState({ dataset: myData.data2018 });
    else
      this.setState({ dataset: myData.data2020 });
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
      percentage = "This state makes up " + ((rep / this.state.dataset.totalRep) * 100).toFixed(2) + "% of Republican Donations in the US";
    else
      percentage = "This state makes up " + ((dem / this.state.dataset.totalDem) * 100).toFixed(2) + "% of Democratic Donations in the US";

    this.setState({ percentageOfDon: percentage });
  }

  getTotal = (dem, rep) => {
    var total = "The total contributions of this state was $" + (dem + rep).toFixed(2) + ".";
    this.setState({ totalStateDonations: total });
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
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New York", "Graph will go here",
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
          clickHandler: (e) => this.showModal(e.target.dataset.name, "New York", "Graph will go here",
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

  render() {
    return (
      <div className="mapContainer">
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
            width={300}
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