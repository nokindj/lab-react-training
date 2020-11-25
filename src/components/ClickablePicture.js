import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    open: false,
  };
  HandleClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  // HandleClick = () => {
  //   if(this.state.open) {

  //     this.setState({
  //       open: false,
  //     });
  //   } else {
  //     this.setState({
  //       open: true,
  //     });
  //   }
  // };
  render() {
    let source = this.props.img;
    if (this.state.open) {
      source = this.props.imgClicked;
    }
    return (
      <div>
        <img src={source} onClick={this.HandleClick} alt="" />
      </div>
    );
  }
}

export default ClickablePicture;
