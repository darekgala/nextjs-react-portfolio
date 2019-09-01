import React from 'react';
import Index from '../components/Index';
import Navbar from '../components/navbar/Navbar';

const Home = () => (
  <Index title="Home">
    <Navbar />

    <div className='hero'>
      Home
    </div>
  </Index>
);

export default Home;

