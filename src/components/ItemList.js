import React from 'react'
import Item from './Item'

const ItemList = ({work,handleChange,handleDelete}) => {
  return (
    <div>
        <ul>
            {work.map( (item) =>
                <Item 
                    item={item}
                    key={item.id}
                    handleChange ={handleChange}
                    handleDelete={handleDelete}
                />
            )}
        </ul>
    </div>
  )
}

export default ItemList