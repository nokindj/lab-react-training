import React from 'react';

class CreditCard extends React.Component {
  render() {
    let cardLogo = '/img/visa.png';
    if (this.props.type === 'Master Card') {
      cardLogo = '/img/master-card.svg';
    }

    return (
      <div
        style={{
          border: '1px',
          backgroundColor: `${this.props.bgColor}`,
          color: `${this.props.color}`,
          width: '340px',
          height: '160px',
          borderRadius: '10px',
          padding: '20px',
          margin: '15px',
          display: 'inline-block',
        }}
      >
        <img src={cardLogo} style={{ width: '60px' }} />
        <p>
          **** **** **** {this.props.number[12]}
          {this.props.number[13]}
          {this.props.number[14]}
          {this.props.number[15]}
        </p>
        <p>
          Expires {this.props.expirationMonth}/{this.props.expirationYear}
        </p>
        <p>{this.props.bank}</p>
        <p>{this.props.owner}</p>
      </div>
    );
  }
}

export default CreditCard;
