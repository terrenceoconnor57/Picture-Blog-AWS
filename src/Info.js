import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';


class Info extends React.Component {

    render() {


      return(
<div className = 'infomain'>
        <p className = 'infofont'>Welcome to my Photo Blog App!</p>

        <p className = 'infofont'>I created this application with React.js
        to display some photos about me.</p>

        <p className = 'infofont'>I've uploaded my photos to AWS S3
        and use a GET request to display them in
        my application.</p>

        <p className = 'infofont'>Choose one of the icons on the left
        to display my different collections of photos!</p>

</div>


      )
    }



}

export default Info;
