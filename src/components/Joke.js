import React, { useEffect, useState } from 'react';

export default function Jokes({handleDark, darkMode}) {

  const [ joke, setJoke ] = useState('');
  const [ response, setResponse ] = useState('');
  const [ show, setShow ] = useState(false);

  async function getJoke() {
    const resp = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await resp.json();
    setJoke(data.setup);
    setResponse(data.punchline);
  }

  useEffect(() => {
    getJoke();
  }, [])

  function showJoke() {
    setShow(prev => !prev);
  }

  function Reset() {
    setShow(false);
    getJoke();
  }

  return (

    <section className='flex'>
      <div className='flex'>
        {/* SETUP */}
        <p className='setup'>
          {joke}
        </p>
      </div>
      <div className='flex'>
        {/* PUNCHLINE */}
        <div className='punchline'>
           <p>{ show ? `😹 ${response} 🙀` : null }</p>
        </div>
        <button onClick={showJoke}>Get Joke 🥁</button>
      </div>

      <div className='button-row'>
        <button className='reset circle-button' onClick={Reset}></button>
        <button className='circle-button' onClick={handleDark}>
          { !darkMode ? '🌛' : '🌞' }</button>
      </div>

    </section>
  )
}