import React from 'react';
import NavbarHome from '../components/NavbarHome';
import ContentBox from '../components/ContentBox';

const Home = () => {
  return (
    <div className="container">
      <NavbarHome />
      <ContentBox />
    </div>
  );
}

export default Home;