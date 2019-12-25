import React from 'react';

export const ConvertToJS = () => {

  // Vanilla Javascript here
  var date = new Date();
  var hours = date.getHours();
  let timeOfTheDay;
  
    // And INLINE STYLE:
    const thisInlineStyle = {
      fontStyle: "bold",
      opacitiy: "20"
    };

  if (hours < 12) {
    timeOfTheDay = 'morning';
    thisInlineStyle.color = "#ABE188";
  } else if (hours >= 12 && hours < 17) {
    timeOfTheDay = 'afternoon';
    thisInlineStyle.color = "#F7EF99";
  } else {
    timeOfTheDay = 'night';
    thisInlineStyle.color = '#F1BB87';
  }

  // Add 'style' property inside the 'h2' element:
  return (
    <h2 style={thisInlineStyle}>Good {timeOfTheDay}!</h2>
  ); 

}