import React, { Component } from "react";

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.pad.id,
      letter: this.props.pad.letter,
      src: this.props.pad.src,
      keyCode: this.props.pad.keyCode,
      color: this.props.pad.color,
      playing: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleClick() {
    if (this.props.power) {
      this.setState({ playing: true });
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.state.id);
      setTimeout(() => {
        this.setState({ playing: false });
      }, 100);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === this.state.keyCode && this.props.power) {
      this.setState({ playing: true });
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.state.id);
      setTimeout(() => {
        this.setState({ playing: false });
      }, 100);
    }
  }

  render() {
    let classname;
    if (!this.props.power) {
      classname = "drum-pad " + this.state.color + "-pad-off";
    } else if (this.state.playing) {
      classname = "drum-pad " + this.state.color + "-off";
    } else {
      classname = "drum-pad " + this.state.color;
    }
    return (
      <div className={classname} id={this.state.id} onClick={this.handleClick}>
        <audio
          ref={ref => (this.audio = ref)}
          className="clip"
          id={this.state.letter}
          src={this.state.src}
        />
        {this.state.letter}
      </div>
    );
  }
}

export default DrumPad;