import React from 'react';
import about from '../img/aboutme.jpg';

function ImageSection() {
  return (
    <div className='ImageSection'>
      <div className='img'>
        <img src={about} alt='' />
      </div>
      <div className='about-info'>
        <h4>
          I am<span> Wong Chui Ching</span>
        </h4>
        <p className='about-text'>
          Primary School at SJK (C) Su Lai. Secondary School at SMK Bandar Sibu.
          Bachelor of Science (Hons) Acturial Science at Universiti Tunku Abdul
          Rahman (UTAR). Master in Mathematics at Universiti Tunku Abdul Rahman
          (UTAR).
        </p>
        <div className='about-details'>
          <div className='left-section'>
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Country</p>
          </div>
          <div className='right-section'>
            <p>: Wong Chui Ching</p>
            <p>: {2021 - 1998}</p>
            <p>: Malaysia</p>
            <p>: Mandarin, English, Bahasa Malaysia</p>
            <p>: Bandar Sungai Long, 43000 Kajang, Selangor</p>
            <p>: Malaysia</p>
          </div>
        </div>
        <button className='btn'>Download Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
