import React, { useState, useEffect, useRef } from 'react';

import randomColor from '../randomColor';
import Name from './Name';
import ColorPicker from '../useEffect/ColorPicker';
import WindowSize from '../useEffect/WindowSize';
import Canvas from '../Canvas';

export default function Paint() {

  // Attributes
  const [colors, setColors] = useState([]);
  const [activeColor, setActiveColor] = useState(null);


  const getColors = () => {
    // Select a randomized color, removing '#' from it with `slice()`
    var baseColor = randomColor().slice(1);

    // Creates a color schema based on baseColor
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
      .then(res => res.json())
      .then(res => {
        // Populate 'colors' with an array
        setColors(res.colors.map(color => color.hex.value));
        // Sets activeColor with first color of that array
        setActiveColor(res.colors[0].hex.value);
      });
  }

  // Only runs ONCE
  useEffect(getColors, [])

  const headerRef = useRef({ offsetHeight: 0 });

  return (
    <div className="app">

      <header style={{ borderTop: `10px solid ${activeColor}` }}>

        <div className="app">
          <Name />
        </div>

        <ColorPicker
          colors={colors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          getColors={getColors}
        />

      </header>

      {activeColor && (
        <Canvas
          color={activeColor}
          height={window.innerHeight - headerRef}
        />
      )}
      <WindowSize />
    </div>
  );
}