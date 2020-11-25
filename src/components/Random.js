import React from 'react';

class Random extends React.Component {
  render() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    return (
      <div>
        {`Random value between ${this.props.min} and ${
          this.props.max
        } => ${getRandomInt(this.props.min, this.props.max)}`}
      </div>
    );
  }
}

export default Random;
