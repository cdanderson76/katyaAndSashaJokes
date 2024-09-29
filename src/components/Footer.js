import React from 'react';
import cat1 from '../images/cat1.jpeg';
import cat2 from '../images/cat2.jpeg';
import cat3 from '../images/cat3.jpeg';
import cat4 from '../images/cat4.jpeg';
import cat5 from '../images/cat5.jpg';
import cat6 from '../images/cat6.jpeg';
import cat7 from '../images/cat7.jpeg';
import cat8 from '../images/cat8.jpeg';

export default function Footer() {

  const catsArray = [
    cat1,
    cat2,
    cat3,
    cat4,
    cat5,
    cat6,
    cat7,
    cat8
  ];

  const randomNumber = Math.floor(Math.random() * catsArray.length);
  const date = new Date().toLocaleDateString();
  console.log(date);

  return (
    <footer>
      {/* <div className='cat-pic'></div> */}
      <img src={catsArray[randomNumber]} className='cat-pic' alt='cat sitting on couch' />
      <div className=''>
        {/* <hr className='border-hr'/> */}
      </div>
      <p className='date'>Today's date: {date}</p>
    </footer>
  )
}