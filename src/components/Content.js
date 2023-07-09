import React from 'react'
import ItemList from './ItemList'
import '../styles/Content.css'

const Content = ({work,handleChange,handleDelete}) => {
    
    return (
        <>
            {(work.length) ? (
                <ItemList 
                    work={work}
                    handleChange={handleChange}
                    handleDelete={handleDelete}
                />
                ):
                (
                    <div> <p>There is no events for today....</p></div>
                )
            }
        </>
    )
}

export default Content