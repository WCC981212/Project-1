import React from 'react';
import {
  faFacebook,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='HomePage'>
      <header className='hero'>
        <h1 className='hero-text'>
          Hi, I am
          <span> Wong Chui Ching.</span>
        </h1>
        <p className='h-sub-text'>
          This is my website. Nice to meet you. Let dig into more about me.
          Thank for your support.
        </p>
        <div className='icons'>
          <Link className='icon-holder'>
            <FontAwesomeIcon icon={faFacebook} className='icon fb' />
          </Link>
          <Link className='icon-holder'>
            <FontAwesomeIcon icon={faGithub} className='icon gh' />
          </Link>
          <Link className='icon-holder'>
            <FontAwesomeIcon icon={faYoutube} className='icon yt' />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
