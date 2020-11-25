import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    img: this.props.img,
  };
  HandleClick = () => {
    this.setState({
      img: this.props.imgClicked,
    });
  };
  render() {
    return (
      <div>
        <img src={this.props.img} onClick={this.HandleClick} alt="" />
      </div>
    );
  }
}

export default ClickablePicture;
