import React,{Component, useState, } from 'react';
import Second from '../src/Second.js';
import  '../src/first.css';

const First=()=>{
    const [input,setinput]=useState("");
 
    const[backgroundColor,setColor]=useState('blue');
    const inputhandler=()=>{
        setColor (
          {
            backgroundColor:'pink'
          }
        
        )
    }
 
    const show=()=>{
        const a=prompt('plz enter number');
        const b='0123456789ABCDEF';
        for(let i=0;i<a.length;i++)
        {
          if(b.includes([a[i]]))
          {
            continue;
          }
          alert('INVALID ERROR')
         
        }
       <Second change={inputhandler}/>
    }
          return (
         <div class="left">
            
    Hex Code :<input type="text" name="Hex_Code" placeholder="Hex Code Here" 
    id="hex"
    value={input} onChange={(e)=>setinput(e.target.value)}
    onClick={show}
    ></input>
        
       
         </div>
          

           
        )
    }


export default First;