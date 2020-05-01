import React from 'react';

import './App.css';
import Me from './Me';
import Main from './Main';
import Info from './Info';
import Hobbies from './Hobbies';
import Food from './Food';
import PutRequest from './PutRequest';
import { BrowserRouter, Route, Link } from "react-router-dom";




class App extends React.Component {


  render() {





    return (
      <BrowserRouter>
      <div className = 'center'>
      <div className = 'fixed'>
      <div className="title">Photo Blog App</div>
      <div className="title2"><i class="camera retro icon"></i></div>
      </div>
      <div className ='sidediv'>
      <ul className = 'listside'>
        <li className = 'listitemside'><Link className = 'linkside' to = '/Me'><i class="id badge icon"></i></Link></li>
        <li className = 'listitemside'><Link className = 'linkside' to = '/Hobbies'><i class="exclamation icon"></i></Link></li>
        <li className = 'listitemside'><Link className = 'linkside' to = '/Food'><i class="lemon icon"></i></Link></li>
        <li className = 'listitemside'><Link className = 'linkside' to = '/Info'><i class="info icon"></i></Link></li>
      </ul>
      </div>
      <br/>


<Route path = '/' exact component = {Info} />

<Route path = '/Hobbies' exact component = {Hobbies} />

<Route path = '/Food' exact component = {Food} />

<Route path = '/Info' exact component = {Info} />

<Route path = "/Me" exact component = {Me} />

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



      </div>


      </BrowserRouter>

    );
  }
}

export default App;
