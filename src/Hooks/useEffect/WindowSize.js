import React, { useState, useEffect } from 'react';


export default function WindowSize() {

  // State

  // gets window size from DOM elements
  const [ [windowWidth, windowHeight], setWindowSize ] =  useState(
    [window.innerWidth, window.innerHeight]
  );

  // sets visibility of the window size alert
  const [visible, setVisible] = useState(false);

  // Method to handle de resize effect:
  const handleResize = () => {
    let lastTimeoutId;

    const handler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      setVisible(true);
      // clears previous interval
      clearTimeout(lastTimeoutId);

      lastTimeoutId = setTimeout(() => {
        setVisible(false);
      }, 800)
    }

    return handler();
  }

  // useEffect to manage it
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // end finishes resize, return to end alert:
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);


  return (
    <div />
  );
}
