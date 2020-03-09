import React, { Component } from "react";
import "./App.css";
import axios from "axios";
class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        this.setState({smurfs: response.data})
      })
      .catch(console.log("error"));
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>

    );
  }
}

export default App;
