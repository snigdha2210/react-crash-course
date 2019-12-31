import { useState, useEffect } from 'react';

// Now transformed into a personal Hook method:

export default function useWindowSize(cb) {

  // State
  // gets window size from DOM elements
  const [ [windowWidth, windowHeight], setWindowSize ] =  useState(
    [window.innerWidth, window.innerHeight]
  );

  // useEffect to manage it
  useEffect(() => {

    // Method to handle de resize effect:
    const handleResize = () => {
      cb();
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', handleResize);
    // end finishes resize, return to end alert:
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return [windowWidth, windowHeight];
}
