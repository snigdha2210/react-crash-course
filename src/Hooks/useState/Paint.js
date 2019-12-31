import React, { useState, useEffect, useRef, useCallback } from 'react';

import randomColor from '../randomColor';
import Name from './Name';
import ColorPicker from '../useEffect/ColorPicker';
import WindowSize from '../useEffect/WindowSize';
import Canvas from '../Canvas';
import RefreshButton from '../useCallback/RefreshButton';

export default function Paint() {

  // Attributes
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);

  // const getColors = () => {
  //   // Select a randomized color, removing '#' from it with `slice()`
  //   var baseColor = randomColor().slice(1);

  //   // Creates a color schema based on baseColor
  //   fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
  //     .then(res => res.json())
  //     .then(res => {
  //       // Populate 'colors' with an array
  //       setColors(res.colors.map(color => color.hex.value));
  //       // Sets activeColor with first color of that array
  //       setActiveColor(res.colors[0].hex.value);
  //     });
  // }

  // Transformed getColors into a callback

  const getColors = useCallback(() => {
    var baseColor = randomColor().slice(1);

    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then(response => response.json())
      .then(response => {
        setColors(response.colors.map(color => color.hex.value));
        setActiveColor(response.colors[0].hex.value);
      })
  }, [/* no dependencies to it, so put empty */])

  // Only runs ONCE, setting the starting five colors
  useEffect(getColors(), [])

  const headerRef = useRef({ offsetHeight: 0 });

  return (
    <div className="app">

      <header style={{ borderTop: `10px solid ${activeColor}` }}>

        <div className="app">
          <Name />
        </div>
        <div>
          <ColorPicker
            colors={colors}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
            // getColors={getColors}  // Used into RefreshButton now
            />
          <RefreshButton cb = {getColors}/>
        </div>
        
      </header>

      {activeColor && (
        <Canvas
          color={activeColor}
          height={window.innerHeight - headerRef.current.offsetHeight}
        />
      )}
      <WindowSize />
    </div>
  );
}
