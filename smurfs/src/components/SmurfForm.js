import React, { useState, useContext } from 'react'
//import { useForm } from 'react-hook-form';
import axios from "axios";

import {SmurfsContext} from './SmurfsContext';


const SmurfForm = () => {
    const value = useContext(SmurfsContext);
    const [smurfs, setSmurfs] = useContext(SmurfsContext);
    const [newSmurf, setNewSmurf] = useState({
        name:"",
        age:"",
        height:""
    });


   // const {register, handleSubmit} = useForm();
    //const onSubmit = (newSmurf, addSmurf) => {
        //event.preventDefault();
        //console.log(newSmurf);
        //now how do I add this to the SMURFS state?
    //}
    const updateSmurf = (e) => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value,
          });
        //setSmurfs(smurfs, newSmurf)
        console.log(smurfs)
    }
    const addSmurf = e => {
        e.preventDefault();
        setSmurfs(smurfs, newSmurf);
        axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            value[0].push("/")
        //console.log(value[0].push("/"))

        })
        .catch(error => {
            console.log(error);
        })
        .finally(() =>{
            window.location.reload()
        }) 
    


    }


    return (
        <div className="SmurfForm">
            <form onSubmit={addSmurf}>
                <input type="text" placeholder="Smurfy Name" name="name" value={newSmurf.name} onChange={updateSmurf} />
                <input type="text" placeholder="Smurfy Age" name="age" value={newSmurf.age} onChange={updateSmurf}/>
                <input type="text" placeholder="Smurfy Height" name="height" value={newSmurf.height} onChange={updateSmurf}/>
                <button type="submit">Add a Smurf to the Villiage</button>
            </form>
        </div>
    )
}

export default SmurfForm;