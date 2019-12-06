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
    e: null
  }

  showModal = stated => {
    this.setState({ show: true ,
      e : stated
    });
    
  }

  hideModal = () => {
    this.setState({ show: false });
  }
  sliderLog(value) {
    console.log(value); //eslint-disable-line
  }
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };
  /* optional customization of filling per state and calling custom callbacks per state */

  statesCustomConfig = () => {
    return {
      "NY": {
        fill: "blue",
        clickHandler: (e)=> this.showModal(e.target.dataset.name)
      }
    }
  };

  render() {
    return (
      <div className="mapContainer">
        <div className="App">
          <h1>USA FEC Individual Donations from 1980 to 2020</h1>
          <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
          <Modal show={this.state.show} handleClose={this.hideModal}>
          {this.state.e}
          </Modal>
        </div>
        <div className="Legend" style={legStyle}>
          <ContinuousColorLegend
            width={300}
            startTitle="%DEM"
            midTitle="0"
            endTitle="%REP"
            startColor="blue"
            endColor="green"
            midColor="white"
          />
        </div>
        <div style={styles}>
          <Slider step={2} min={1980} max={2020} onAfterChange={this.sliderLog} marks={marks} included={false} />
        </div>
      </div>
    );
  }
}
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <div> </div>
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