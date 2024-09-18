import React from 'react';

export default function Jokes() {

  return (

    <section>
      <div className='flex'>
        {/* SETUP */}
        <h2>
          What do you call a fashionable lawn statue with an excellent sense of rhythmn?
        </h2>
      </div>
      <div>
        {/* PUNCHLINE */}
        <p className='punchline'>
          A metro-gnome
        </p>
        <button>Get Joke</button>
      </div>
    </section>
  )
}