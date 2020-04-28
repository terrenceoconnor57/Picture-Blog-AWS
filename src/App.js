import React from 'react';
import logo from './logo.svg';
import './App.css';




class App extends React.Component {
  constructor(props){
    super(props);
      this.state = { images: []}

  }


  handleMe = () => {

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
      <div className = 'center'>
      <div class="ui huge header">Photo Blog</div>
      <h2>Here are some photos of me!</h2>
      <br/>
      <br/>
      <div class="ui buttons">
  <button class="ui button" onClick = {this.handleMe}>One</button>
  <button class="ui button">Two</button>
  <button class="ui button">Three</button>
</div>
<div className= 'break'/>

<ul className="wholelist">
  {images.map((image =>
  <li key = {image.id}><img src = {image.image}/></li>
))}

</ul>



      </div>



    );
  }
}

export default App;
