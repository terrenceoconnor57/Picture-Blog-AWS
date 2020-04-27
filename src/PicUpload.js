import React from 'react';
import logo from './logo.svg';
import S3FileUpload from 'react-s3';
import BlogPost from './BlogPost';
import './App.css';


const config = {
 bucketName: 'testingbucketput',
 dirName: 'photos',
 region: 'us-east-1',
 accessKeyId: 'AKIAJJBVSNXLQP6VL2NQ',
 secretAccessKey: '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',
}




class App extends React.Component {
  constructor() {
    super();
}



upload(e) {
  console.log(e.target.files[0]);
  S3FileUpload.uploadFile(e.target.files[0], config)
  .then( (data) => {
    console.log(data.location);

  })
  .catch((err) =>{
    alert(err);
  })
}


  render() {
    return (
      <div>
      <h1>Hello</h1>

      <input type = 'file'
      onChange = {this.upload}/>



      <br/>
      <br/>
      <BlogPost />
      </div>

    );
  }
}

export default App;
