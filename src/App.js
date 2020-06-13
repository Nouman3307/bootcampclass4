import React,{useState} from 'react';
import {Class4} from './class4';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`-box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Class4  counter={count}/>
      <button onClick={() => setCount(count + 3)}>
        Click me
      </button>
      <button onClick={() => setMorning(!isMorning)}> 
        Update Day
      </button>
    </div>
  );
}

export default App;
