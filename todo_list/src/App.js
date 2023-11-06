import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem]= useState("")
  const addList = (e)=>{
    setItem(e.target.value)
  }
  return (
    <div className="main">
      <div className='center'>
        <h1>Todo List</h1>

        <div className='inputfiled'>
        <input placeholder='Add Item' onChange={addList}></input>
        <button>+</button>
        </div>
        <ol className='lists'>
          <li>{item}</li>
        </ol>
      </div>

    </div>
  );
}

export default App;
