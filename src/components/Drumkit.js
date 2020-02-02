import React, { Component } from "react";
import DrumPad from './DrumPad';

const data = [
  {
    id: "snare",
    letter: "Q",
    keyCode: 81,
    color: "blue",
    src: "https://www.myinstants.com/media/sounds/snare.mp3"
  },
  {
    id: "bass 1",
    letter: "W",
    keyCode: 87,
    color: "pink",
    src: "https://www.myinstants.com/media/sounds/bass-drum.mp3"
  },
  {
    id: "bongo",
    letter: "E",
    keyCode: 69,
    color: "blue",
    src: "http://tipiwiki.free.fr/snd/Percussion(4e)2.wav"
  },
  {
    id: "tom tom",
    letter: "A",
    keyCode: 65,
    color: "pink",
    src: "http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav"
  },
  {
    id: "bass 3",
    letter: "S",
    keyCode: 83,
    color: "blue",
    src: "http://billor.chsh.chc.edu.tw/sound/bass4.wav"
  },
  {
    id: "shotgun",
    letter: "D",
    keyCode: 68,
    color: "pink",
    src: "http://david.guerrero.free.fr/Effects/ShotgunReload.wav"
  },
  {
    id: "high hat",
    letter: "Z",
    keyCode: 90,
    color: "blue",
    src: "http://www.denhaku.com/r_box/tr707/closed.wav"
  },
  {
    id: "drum hit",
    letter: "X",
    keyCode: 88,
    color: "pink",
    src: "http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3"
  },
  {
    id: "laser",
    letter: "C",
    keyCode: 67,
    color: "blue",
    src: "http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav"
  }
];

class Drumkit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "ready",
      turnOn: false
    };
    this.handleDisplay = this.handleDisplay.bind(this);
    this.power = this.power.bind(this);
  }

  power() {
    this.setState({
      turnOn: !this.state.turnOn
    });
    if (!this.state.turnOn) {
      this.setState({
        display: "ready"
      });
    }
  }

  handleDisplay(display) {
    this.setState({
      display
    });
  }

  render() {
    return (
      <div
        id="gradient-border"
        className={this.state.turnOn ? "grad-border-on" : "grad-border-off"}
      >
        <div
          id="drum-machine"
          className={this.state.turnOn ? "machine-on" : ""}
        >
          <div id="gradient">
            <div
              id="gradient-display"
              className={this.state.turnOn ? "grad-disp-on" : "grad-disp-off"}
            >
              <div id="display">
                <h1>{this.state.turnOn ? this.state.display : ""}</h1>
              </div>
            </div>
            <div id="pads">
              <div id="drum-pads">
                {data.map(d => (
                  <DrumPad
                    pad={d}
                    handleDisplay={this.handleDisplay}
                    power={this.state.turnOn}
                  />
                ))}
              </div>
              <div
                id="power"
                className={this.state.turnOn ? "power-on" : "power-off"}
                onClick={this.power}
              >
                <i class="fas fa-power-off fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Drumkit