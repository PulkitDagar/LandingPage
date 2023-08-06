import React from 'react';
import people from '../assets/people.png';
import ai2 from '../assets/ai2.png';
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">The Ultimate Guide to Ace Your Career </h1>
      <p className='para'>Helping students and recent graduates start their career.
       Enabling skills development in a live environment, making students industry ready.</p>

      <div className="gpt3__header-content__input">
        <input type="text" id="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='error'/>
        <p>1600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai2} alt='error' />
    </div>
  </div>
);

export default Header;
