import React from 'react';
import kitty from '../images/kitty.jpg'

export default function Header() {

  return (
    <section className='flex'>
      <h1>Katya and Sasha's Joke Generator</h1>
      <img src={kitty} className='hello-kitty-image' alt='hello kitty pic'/>
    </section>
  )
}