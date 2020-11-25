import React from 'react';

class LikeButton extends React.Component {
  state = {
    like: 0,
    backgroundColor: 'purple',
  };
  handleIncrementClick = () => {
    this.setState({
      like: this.state.like + 1,
      backgroundColor: 'blue',
    });
  };
  render() {
    return (
      <div>
        <button
          style={{
            border: '1px',
            color: 'white',
            width: '100px',
            height: '30px',
            margin: '5px',
            backgroundColor: `${this.state.backgroundColor}`,
          }}
          onClick={this.handleIncrementClick}
        >
          {this.state.like}
        </button>
      </div>
    );
  }
}

export default LikeButton;
