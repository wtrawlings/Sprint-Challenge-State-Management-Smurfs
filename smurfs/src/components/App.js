import React, { Component } from "react";
//import axios from 'axios';

import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import { SmurfsProvider } from './SmurfsContext';

class App extends Component {
  //set up state here and then when you get it working move it to Context?
  // state = {
  //   smurfs: []
  // }
  // componentDidMount() {
  //     axios.get('http://localhost:3333/smurfs')
  //         .then(response => {
  //           // console.log(response.data);
  //           this.setState({ smurfs: response.data});
  //           console.log(this.state.smurfs);
  //         })
  //         .catch(err => {
  //             console.log ({ err })
  //         })
  // };

  
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <p> </p>
        <SmurfsProvider>
          <SmurfForm />
            <p> </p>
          <SmurfList />
          {/* <SmurfList /> */}
        </SmurfsProvider>
      </div>
    );
  }
}

export default App;
