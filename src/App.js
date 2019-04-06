import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    artistname: null,
    songname: null,
    lyrics: null,
  }
  
  handleClick= () => {
    const url = "https://api.lyrics.ovh/v1/"
      + this.state.artistname
      + "/" + this.state.songname;
      console.log(url);
      console.log("artistname" , this.state.artistname, this.state.songname)
    // console.log(this.state.firstName);
    // console.log("Button Clicked");
    
    axios.get (url)
    .then(response=>{
      
      this.setState({
        lyrics:response.data.lyrics
      })
      // console.log(response.data)
    })
  }
  
  // setFirstName = e =>{
  //   // console.log(e.target.value);
  //   this.setState({
  //     firstName: e.target.value
  //   })
  
  setArtistName = e =>{
    // console.log(e.target.value);
    this.setState({
      artistname: e.target.value
    })
  }
    
  setSongName = e =>{
  // console.log(e.target.value);
  this.setState({
    songname: e.target.value
  })
  }
  
  render() {
    return (
      <div className="App">
        <p>My app</p>
       
        <input onChange={this.setArtistName}placeholder="Artist Name" />
        <input onChange={this.setSongName}placeholder="Song Name" />
        <button onClick={this.handleClick}>Submit</button>
        {this.state.lyrics}
        
      </div>
    );
  }
}

export default App;

// <input onChange={this.setFirstName}placeholder="First Name" />
