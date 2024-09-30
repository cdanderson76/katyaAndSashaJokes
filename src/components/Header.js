import React from 'react';
import kitty from '../images/kitty.jpg'

export default function Header({dark}) {

  return (
    <section className='flex'>
      {/* UNABLE TO CHANGE THE FONT COLOR TO WHITE IN DARK MODE! */}
      <h1 className='title' style={ dark ? { color: 'white' } : null }>
        Katya and Sasha's Joke Generator
      </h1>
      <img src={kitty} className='hello-kitty-image' alt='hello kitty pic'/>
    </section>
  )
}