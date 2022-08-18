import React from 'react';

export default function Card(props) {
  // acá va tu código
  return(
    <div>
      <button onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <div> 
        <p>Min</p>
        <p>{props.min}</p>
        <p>Max</p>
        <p>{props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"img"}/>
    </div>
  )

};

// colocamos entre llaves codigo js --el texto no tinen que estar entre llaves
// si la imagen no salta colocamos alt=img