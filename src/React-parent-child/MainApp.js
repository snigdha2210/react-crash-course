import React from 'react';

// Import created component
import {Header} from './components/Header.js';
import {MainContent} from './components/MainContent.js';
import {Footer} from './components/Footer'

export function MainApp() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}