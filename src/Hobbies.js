import React from 'react';

import './App.css';

import { BrowserRouter, Route, Link } from "react-router-dom";



class Hobbies extends React.Component {
  constructor(props){
    super(props);
      this.state = { images: []}

  }


  componentDidMount = () => {

      fetch('https://testingbucketput.s3.amazonaws.com/Hobbies.json')
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
      <h1 className = 'description'>Some of my hobbies which is mainly playing guitar.</h1>
      <br/><br/><br/>

      <div className = 'allimages'>
      <div class="ui medium images">
      {this.state.images.map((image =>
  <img className = 'img' key = {image.id} src={image.image}
  onClick = {() => window.open(image.image)}/>
  ))}


</div>
</div>

</BrowserRouter>


    );
  }
}

export default Hobbies;
