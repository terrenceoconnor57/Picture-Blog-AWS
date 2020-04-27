import React, { Component } from 'react';



class BlogPost extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('https://testingbucketput.s3.amazonaws.com/data.json', {
      method: 'PUT',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="song">Enter song name</label>
        <input id="song" name="song" type="text" />





        <button>Send data!</button>
      </form>
    );
  }
}

export default BlogPost;
