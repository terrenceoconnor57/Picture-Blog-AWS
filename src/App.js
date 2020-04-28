import React from 'react';

import './App.css';
import Me from './Me/Me';
import Main from './Main';
import { BrowserRouter, Route, Link } from "react-router-dom";




class App extends React.Component {


  render() {





    return (
      <BrowserRouter>
      <div className = 'center'>
      <div className="title">Photo Blog App</div>
      <div className="title2"><i class="camera retro icon"></i></div>
      <ul className ='listtop'>
        <li className = 'listitem'><Link className = 'links' to = '/Me/Me'><i class="id badge icon"></i>Me</Link></li>
        <li className = 'listitem'><Link className = 'links' to = '/Me/Me'><i class="exclamation icon"></i>Hobbies</Link></li>
        <li className = 'listitem'><Link className = 'links' to = '/Me/Me'><i class="lemon icon"></i>Food</Link></li>
      </ul>

      <br/>

<Route path = "/Me/Me" exact component = {Me} />


      </div>


      </BrowserRouter>

    );
  }
}

export default App;
