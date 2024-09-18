import React from 'react';

export default function Jokes() {

  return (

    <section>
      <div className='flex'>
        {/* SETUP */}
        <p className='setup'>
          What do you call a fashionable lawn statue with an excellent sense of rhythmn?
        </p>
      </div>
      <div>
        {/* PUNCHLINE */}
        <p className='punchline'>
        😅A metro-gnome🤣
        </p>
        {/* <button>Get Joke</button> */}
      </div>
      <button className='reset'></button>
    </section>
  )
}