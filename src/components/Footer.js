import React from 'react';
import cat2 from '../images/cat2.jpeg'
import cat3 from '../images/cat3.jpeg'

export default function Footer() {

  return (
    <footer>
      {/* <div className='cat-pic'></div> */}
      <img src={cat3} className='cat-pic' alt='cat sitting on couch' />
      <div className=''>
        {/* <hr className='border-hr'/> */}
      </div>
      <p className='date'>September 17, 2024</p>
    </footer>
  )
}