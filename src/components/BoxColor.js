import React from 'react';

class BoxColor extends React.Component {
  render() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }
    return (
      <div>
        <div
          style={{
            border: '1px solid black',
            padding: '50px',
            width: '500px',
            backgroundColor: `rgb(${getRandomInt(0, 255)},${getRandomInt(
              0,
              255
            )}, ${getRandomInt(0, 255)})`,
          }}
        ></div>
      </div>
    );
  }
}

export default BoxColor;
