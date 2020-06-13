import React,{useState} from 'react';
import {Class4} from './class4';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let [ismorning, setday] =useState(true);

  return (
    <div className={'box'}>
      <Class4  counter={count}/>
      <button onClick={() => setCount(count + 3)}>
        Click me
      </button>
    </div>
  );
}

export default App;
