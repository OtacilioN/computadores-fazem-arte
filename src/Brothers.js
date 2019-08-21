import React from 'react';
import './App.css';
import Box from './Box';

class Brothers extends React.Component {
  render() {
    return (
      <div
        className="Container"
        style={{ backgroundColor: this.props.fatherColor, flexDirection: this.props.direction }}
      >
        <Box fatherColor={this.props.fatherColor} />
        <Box />
      </div>
    );
  }
}

export default Brothers;
