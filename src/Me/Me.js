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
<div className = 'center'>


<div className = 'photos'>
<ul className="wholelist">
  {images.map((image =>
  <li key = {image.id} className = 'listspace'>
  <h1 className = 'caption'>{image.description}</h1>
  <img className = 'picsize' src = {image.image}/>

  </li>
))}


</ul>
</div>
</div>



</BrowserRouter>


    );
  }
}

export default Me;
