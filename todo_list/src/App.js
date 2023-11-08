import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [item, setItem]= useState("")
  const [itemarr, setItemArr]= useState([])
  const addList = (e)=>{
    setItem(e.target.value)
  }
  const listOfItem = ()=>{
    setItemArr((old)=>{
      return [...old, item]
    })
    setItem("");
  }
  const deletItem = (id)=>{
   console.log("delet item");

   setItemArr((itemarr)=>{
    return itemarr.filter((item,index) =>{
      return index !== id;
    })

   })
}
  return (
    <div className="main">
      <div className='center'>
        <h1>Todo List</h1>

        <div className='inputfiled'>
        <input placeholder='Add Item' value={item} onChange={addList}></input>
        <button onClick={listOfItem}>+</button>
        </div>
        <ol className='lists'>
          {
            itemarr.map((arrvalue, index)=>{
            
              return <TodoList 
                      key={index}
                      id={index}
                      text={arrvalue}
                      onSelect={deletItem}            />
            })
          }
        </ol>
      </div>

    </div>
  );
}

export default App;
