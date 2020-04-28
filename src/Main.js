import React from 'react';
import logo from './logo.svg';
import './App.css';
import Me from './Me/Me';

import { BrowserRouter, Route, Link } from "react-router-dom";




class Main extends React.Component {


  render() {





    return (
      <BrowserRouter>

      <h2 className = 'title2'>My Photo Galleries</h2>
      <br/>

      <br/>

<div className = 'imagesfront'>

  <img className = 'img' src= {"mee.png"}/>



  <img  className = 'img' src= {"guitar.jpg"}/>

  <img  className = 'img' src= {"mee.png"}/>



</div>










      </BrowserRouter>

    );
  }
}

export default Main;
