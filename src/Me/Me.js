import React from 'react';

import '../App.css';

import { BrowserRouter, Route, Link } from "react-router-dom";



class Me extends React.Component {
  constructor(props){
    super(props);
      this.state = { images: []}

  }


  componentDidMount = () => {

      fetch('https://testingbucketput.s3.amazonaws.com/pictures.json')
          .then(res => res.json())
          .then(json => {
              this.setState({
                  images: json

              })
          }).catch((err) => {
              console.log(err);
          });


  }

  render() {
    const { images } = this.state;




    return (
      <BrowserRouter>
      <h1 className = 'description'>A collection of photos about me.</h1>
      <br/><br/><br/>


      <div class="ui medium images">
      {this.state.images.map((image =>
  <img className = 'img' key = {image.id} src={image.image}/>
  ))}


</div>


</BrowserRouter>


    );
  }
}

export default Me;
