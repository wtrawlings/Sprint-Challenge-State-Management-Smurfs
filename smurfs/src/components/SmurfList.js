import React from 'react';
import axios from 'axios';

import SmurfPerson from './SmurfPerson';

class SmurfList extends React.Component {

//This is where I originally had state and then raised it to App to be able 
//to pass down props if needed.
    state = {
        smurfs: []
    }
    componentDidMount() {
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                this.setState({ smurfs: res.data});
            })
            .catch(err => {
                console.log ({ err })
            })
    };

    

    render (props) {
        //console.log(props);
       
        return (
            <div className = "smurfListing">
                
                {this.state.smurfs.map(smurf => {
                    return(
                    <SmurfPerson smurf={smurf} />
                    )
                })}
                
            
            </div>
        );
    }
};


export default SmurfList;