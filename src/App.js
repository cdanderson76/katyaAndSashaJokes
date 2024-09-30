import React from 'react';
import Header from './components/Header';
import Jokes from './components/Joke';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {

  // State for dark mode

  const [ dark, setDark ] = useState(false);

  function goDark() {
    setDark(prev => !prev);
  }

  return (
    <body className={dark ? 'dark-mode' : 'light-mode'}> 
      <main className='card'>
        <Header darkMode={dark}/>
        <Jokes handleDark={goDark} darkMode={dark}/>
        <Footer />
      </main>
    </body>
  )
}