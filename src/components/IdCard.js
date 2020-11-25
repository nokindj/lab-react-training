import React from 'react';

class IdCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>
            <b>IdCard</b>
          </h1>
        </div>
        <img src={this.props.picture} />
        <p>First name: {this.props.firstName}</p>
        <p>Last name: {this.props.lastName}</p>
        <p>
          Gender: {this.props.male} {this.props.female}
        </p>
        <p>Height: {this.props.number}</p>
        <p>Birth: {this.props.birth.toDateString()}</p>
      </div>
    );
  }
}

export default IdCard;
