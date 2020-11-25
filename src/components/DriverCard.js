import React from 'react';

function DriverCard(props) {
  return (
    <div
      style={{
        border: '1px',
        borderRadius: '10px',
        margin: '10px',
        backgroundColor: 'rgb(73,80,190)',
        color: 'white',
        padding: '15px',
        alignItems: 'center',
      }}
    >
      <div>
        <img src={props.img} alt="" style={{ width: '10%' }} />
      </div>
      <div>
        <h4>{props.name}</h4>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
