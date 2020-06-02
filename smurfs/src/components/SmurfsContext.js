import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';


export const SmurfsContext = createContext();


export const SmurfsProvider = (props) => {
    const [smurfs, setSmurfs] = useState([])
    
      useEffect(() => {
          axios.get('http://localhost:3333/smurfs')
              .then(response => {
                // console.log(response.data);
                setSmurfs(response.data);
                console.log(smurfs);
              })
              .catch(err => {
                  console.log ({ err })
              })
      }, []);

      

    return (
        <SmurfsContext.Provider value={[smurfs, setSmurfs]}>
            {props.children}
        </SmurfsContext.Provider>
    );
};