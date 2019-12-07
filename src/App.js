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
    year : "1979 - 1980",
    e: null,
    state: null,
    data: null,
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
    this.setState({year: (value - 1) + " - " + value});
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
    return {
      "NY": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "New York", "[1 , 2 , 3 , 4 , 5]")
      },
      "AZ": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Arizona", "[1 , 2 , 3 , 4 , 5]")
      },
      "CA": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "California", "[1 , 2 , 3 , 4 , 5]")
      },
      "NV": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Nevada", "[1 , 2 , 3 , 4 , 5]")
      },
      "AK": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Alaska", "[1 , 2 , 3 , 4 , 5]")
      },
      "HI": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Hawaii", "[1 , 2 , 3 , 4 , 5]")
      },
      "OR": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Oregon", "[1 , 2 , 3 , 4 , 5]")
      },
      "WA": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Washington", "[1 , 2 , 3 , 4 , 5]")
      },
      "ID": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Idaho", "[1 , 2 , 3 , 4 , 5]")
      },
      "MT": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Montana", "[1 , 2 , 3 , 4 , 5]")
      },
      "UT": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Utah", "[1 , 2 , 3 , 4 , 5]")
      },
      "WY": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Wyoming", "[1 , 2 , 3 , 4 , 5]")
      },
      "CO": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Colorado", "[1 , 2 , 3 , 4 , 5]")
      },
      "NM": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "New Mexico", "[1 , 2 , 3 , 4 , 5]")
      },
      "TX": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Texas", "[1 , 2 , 3 , 4 , 5]")
      },
      "OK": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Oklahoma", "[1 , 2 , 3 , 4 , 5]")
      },
      "KS": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Kansas", "[1 , 2 , 3 , 4 , 5]")
      },
      "NE": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Nebraska", "[1 , 2 , 3 , 4 , 5]")
      },
      "SD": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "South Dakota", "[1 , 2 , 3 , 4 , 5]")
      },
      "ND": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "North Dakota", "[1 , 2 , 3 , 4 , 5]")
      },
      "WI": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Wisconsin", "[1 , 2 , 3 , 4 , 5]")
      },
      "IA": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Iowa", "[1 , 2 , 3 , 4 , 5]")
      },
      "MN": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Minnesota", "[1 , 2 , 3 , 4 , 5]")
      },
      "IL": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Illinois", "[1 , 2 , 3 , 4 , 5]")
      },
      "MO": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Missouri", "[1 , 2 , 3 , 4 , 5]")
      },
      "AR": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Arkansas", "[1 , 2 , 3 , 4 , 5]")
      },
      "LA": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Louisiana", "[1 , 2 , 3 , 4 , 5]")
      },
      "MS": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Mississippi", "[1 , 2 , 3 , 4 , 5]")
      },
      "AL": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Alabama", "[1 , 2 , 3 , 4 , 5]")
      },
      "TN": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Tennessee", "[1 , 2 , 3 , 4 , 5]")
      },
      "KY": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Kentucky", "[1 , 2 , 3 , 4 , 5]")
      },
      "IN": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Indiana", "[1 , 2 , 3 , 4 , 5]")
      },
      "OH": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Ohio", "[1 , 2 , 3 , 4 , 5]")
      },
      "MI": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Michigan", "[1 , 2 , 3 , 4 , 5]")
      },
      "FL": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Florida", "[1 , 2 , 3 , 4 , 5]")
      },
      "GA": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Georgia", "[1 , 2 , 3 , 4 , 5]")
      },
      "SC": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "South Carolina", "[1 , 2 , 3 , 4 , 5]")
      },
      "NC": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "North Carolina", "[1 , 2 , 3 , 4 , 5]")
      },
      "VA": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Virginia", "[1 , 2 , 3 , 4 , 5]")
      },
      "WV": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "West Virginia", "[1 , 2 , 3 , 4 , 5]")
      },
      "MD": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Maryland", "[1 , 2 , 3 , 4 , 5]")
      },
      "DE": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Delaware", "[1 , 2 , 3 , 4 , 5]")
      },
      "PA": {
        fill: "rgb(255,0,0)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Pennsylvania", "[1 , 2 , 3 , 4 , 5]")
      },
      "NJ": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "New Jersey", "[1 , 2 , 3 , 4 , 5]")
      },
      "CT": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Connecticut", "[1 , 2 , 3 , 4 , 5]")
      },
      "RI": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Rhode Island", "[1 , 2 , 3 , 4 , 5]")
      },
      "MA": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Massachusetts", "[1 , 2 , 3 , 4 , 5]")
      },
      "VT": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Vermont", "[1 , 2 , 3 , 4 , 5]")
      },
      "NH": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "New Hampshire", "[1 , 2 , 3 , 4 , 5]")
      },
      "ME": {
        fill: "rgb(0,0,255)",
        clickHandler: (e) => this.showModal(e.target.dataset.name, "Maine", "[1 , 2 , 3 , 4 , 5]")
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
        <div className="Legend" style={legStyle}>
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

const container = document.createElement('div');
document.body.appendChild(container);
export default App;