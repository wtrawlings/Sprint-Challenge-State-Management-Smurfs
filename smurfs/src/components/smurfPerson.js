//this is the individual to all the smurfs
//this is what gets listed out by .map
import React from 'react';
import { connect } from 'react-redux';

const SmurfPerson = props => {
  return (
    <div>
        <h3>Name: {props.state.name}</h3>
        <p>Age: {props.state.age}</p>
        <p>Height: {props.state.height}</p>
        <p>ID: {props.state.id}</p>
    </div>
  );
};

const mapStateToProps = state =>{
  //console.log("THIS:", state)
  return {
    state
  };
}

export default connect(mapStateToProps, {removeFeatures})(SmurfPerson);
