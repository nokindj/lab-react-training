import React from 'react';

class Greetings extends React.Component {
  render() {
    let greeting = 'Hello';
    if (this.props.lang === 'de') {
      greeting = 'Hallo';
    } else if (this.props.lang === 'fr') {
      greeting = 'Bonjour';
    }
    return (
      <div>
        <p>
          {greeting} {this.props.children}
        </p>
      </div>
    );
  }
}

export default Greetings;
