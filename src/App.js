import logo from './logo.svg';
import './App.css';
import First from '../src/first.js';
import Second  from '../src/Second.js';
import { useState } from 'react';
function App() {
 // const [color,setcolor]=useState("pink");
  // const inputHandler=()=>{
  //    color='pink';
  // }
  return (
    
    <div className="App">

    <First/>
    <Second />
    </div>
  );
}

export default App;
