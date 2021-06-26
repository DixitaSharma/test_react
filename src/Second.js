import React, { useState } from 'react';
import  '../src/second.css';
 
const Second= (props) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  

    
    return (
       
        <div class="right" style={{ backgroundColor: "#" + `${randomColor}` }}>
            
           
            
         {props.backgroundColor}
         
       
           
           

  
         
            

           
        </div>

    );
}

export default Second;
 
