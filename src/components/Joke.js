import React, { useEffect, useState } from 'react';

export default function Jokes() {

  const [ joke, setJoke ] = useState('');
  const [ response, setResponse ] = useState('');

  useEffect(() => {
    async function getJoke() {
      const resp = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await resp.json();
      setJoke(data.setup);
      setResponse(data.punchline);
    } 
    getJoke();
  }, [])

  return (

    <section>
      <div className='flex'>
        {/* SETUP */}
        <p className='setup'>
          {joke}
        </p>
      </div>
      <div>
        {/* PUNCHLINE */}
        <p className='punchline'>
        😅{response}🤣
        </p>
        {/* <button>Get Joke</button> */}
      </div>
      <button className='reset'></button>
    </section>
  )
}