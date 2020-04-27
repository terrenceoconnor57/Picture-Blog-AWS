import React from 'react';
import logo from './logo.svg';
import './App.css';




class App extends React.Component {

  render() {
    return (
      <div className = 'center'>
      <div class="ui huge header">Photo Blog</div>
      <h2>Here are some photos of me!</h2>
      <br/>
      <br/>
      <div class="ui buttons">
  <button class="ui button">One</button>
  <button class="ui button">Two</button>
  <button class="ui button">Three</button>
</div>
<div className= 'break'/>
<div class="ui grid">
  <div class="four wide column">asdfsd</div>
  <div class="four wide column">asdf</div>
  <div class="four wide column">sdf</div>
  <div class="four wide column">sadfsdf</div>
</div>


      </div>



    );
  }
}

export default App;
