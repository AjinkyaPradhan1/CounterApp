import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  const increment = ()=>{
    setCount(count + 1);
  }

  const decrement = ()=>{
    
    setCount(count - 1);
    if(count===0){
      setCount(count * 0);
    }
    
    
  }

  return (
    <div className="App">
      <div className="main">
        <div className="content">
          <div className="top">
            <div className='top_content'>{count}</div>
          </div>
          <div className="bottom">
            <div className='bottom_content'>
              <button className='bt1' onClick={increment}>+</button>
              <button className='bt1'  onClick={decrement}>-</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
