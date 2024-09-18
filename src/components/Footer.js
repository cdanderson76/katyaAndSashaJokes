import React from 'react';
import cat2 from '../images/cat2.jpeg'

export default function Footer() {

  return (
    <footer>
      {/* <div className='cat-pic'></div> */}
      <img src={cat2} className='cat-pic' alt='cat sitting on couch' />
      <div className=''>
        <hr className='border-hr'/>
      </div>
      <p>September 17, 2024</p>
    </footer>
  )
}