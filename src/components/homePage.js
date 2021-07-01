import React from 'react';
import  '../App.css';
import {useHistory} from "react-router-dom";

function HomePage()
{
    let history=useHistory();

    function handleClick(){
        history.push("/category");
    }
    
    return(
        <div>
           <h1>Design Online</h1> 
           <button className="button" onClick={handleClick}>enter</button>
        </div>
    );

}
export default HomePage;