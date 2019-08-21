import React from 'react';
import './App.css';
import Brothers from './Brothers';

const randColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
const randDirection = () => (Math.round(Math.random()) ? 'row' : 'column');

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBrother: false,
      color: props.fatherColor || randColor(),
      direction: randDirection()
    };
  }

  render() {
    return this.state.hasBrother ? (
      <Brothers direction={this.state.direction} fatherColor={this.state.color} />
    ) : (
      <div
        onClick={() => this.setState({ hasBrother: true })}
        className="Box"
        style={{ backgroundColor: this.state.color, animation: 'slide-up 0.5s ease' }}
      />
    );
  }
}

export default Box;
