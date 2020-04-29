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
      <div className = 'fixed'>
      <div className="title">Photo Blog App</div>
      <div className="title2"><i class="camera retro icon"></i></div>
      </div>
      <div className ='sidediv'>
      <ul className = 'listside'>
        <li className = 'listitemside'><Link className = 'linkside' to = '/Me/Me'><i class="id badge icon"></i></Link></li>
        <li className = 'listitemside'><Link className = 'linkside' to = '/'><i class="exclamation icon"></i></Link></li>
        <li className = 'listitemside'><Link className = 'linkside' to = '/'><i class="lemon icon"></i></Link></li>
        <li className = 'listitemside'><Link className = 'linkside' to = '/'><i class="info icon"></i></Link></li>
      </ul>
      </div>
      <br/>

        


<Route path = "/Me/Me" exact component = {Me} />


      </div>


      </BrowserRouter>

    );
  }
}

export default App;
