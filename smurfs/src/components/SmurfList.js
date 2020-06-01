import React, { useContext } from 'react';
//import axios from 'axios';

import {SmurfsContext} from './SmurfsContext';
import SmurfPerson from './SmurfPerson';

const SmurfList = () => {

    const [smurfs, setSmurfs] = useContext(SmurfsContext)    
        console.log(smurfs);//ok we got the smurfs plural array
       
        return (
            <div className = "smurfListing">
               {smurfs.map(smurf => (
               <SmurfPerson smurf={smurf} />
               ))}
            </div>
        );
    };


export default SmurfList;