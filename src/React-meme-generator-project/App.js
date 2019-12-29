import React from 'react';

import {Header} from './components/Header';
import {MemeGenerator} from './components/Meme';
import './styles/scrimbaStyle.css';

export function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}