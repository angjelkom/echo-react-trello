import React, { Component, Fragment } from 'react';
import Boards from '../containers/Boards';
import NewBoard from '../containers/NewBoard';


const Home = () => {
  return (
    <>
    <Boards />
    <NewBoard />
    </>
  )
}

export default Home;
