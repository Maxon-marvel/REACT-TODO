import React from 'react'

const Item = ({item,handleChange,handleDelete}) => {
  return (
    <div className="container themed-container text-center">
    <li className='ListItem' key={item.id} >
        <input type="checkbox" 
            className="check" checked={item.checked}
            onChange={() => handleChange(item.id)}
        />
        <label 
            onDoubleClick={() => handleChange(item.id)} 
            style={(item.checked) ? {textDecoration:"line-through"}:null}
        >
            {item.event} 
        </label>
        <button onClick={() => handleDelete(item.id)}>
            Delete
        </button>
    </li>
    </div>
  )
}

export default Item