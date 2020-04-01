//this is where we will do the .map 
//expect array of objects
import React from 'react';
import SmurfPerson from './SmurfPerson';
import { connect } from "react-redux";

const SmurfList = props => {
return (
    <div className="content">
      <h4>SMURF Registry</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <SmurfPerson key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>SOOO MANY SMURFS!</p>
      )}
    </div>
  );
};