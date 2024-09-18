import React from 'react';
import Header from './components/Header';
import Jokes from './components/Joke';
import Footer from './components/Footer';

export default function App() {

  return (
    <>
      <main className='card'>
        <Header />
        <Jokes />
        <Footer />
      </main>
    </>
  )
}