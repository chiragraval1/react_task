import React from 'react'

function TodoList(props) {

  return (
    <div className='display'>
    <button 
        onClick={()=>{
            props.onSelect(props.id)
        }}
    ><i className="fa-sharp fa-solid fa-xmark"></i></button>
    <li>{props.text}</li>
    </div>
  )
}

export default TodoList