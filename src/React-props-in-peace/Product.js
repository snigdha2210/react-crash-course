import React from 'react';

export function ProductItem(props) {
  return (
    <div>
      <img src={props.prod.imgUrl} alt='place example'/>
      <h4>{props.prod.title}</h4>
      <p>Price: R${props.prod.price}</p>
      <p>Availability: {props.prod.availability ? 'Yes' : 'No'}</p>
    </div>
  ); 
}