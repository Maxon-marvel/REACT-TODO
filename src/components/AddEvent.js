import React from 'react'
import { useRef } from 'react'

const AddEvent = ({NewEvent,setNewEvent,handleNewEvent}) => {

    const inputRef = useRef()
    
    return (
        <div>
            <form className='AddEvent' onSubmit={handleNewEvent}>
            <div className="input-group mb-3">
                <input 
                    type="text" className="form-control" aria-describedby="button-addon2"
                    autoFocus
                    ref={inputRef}
                    id='addEvent'
                    width = '70%'
                    placeholder='Enter the Title' 
                    value={NewEvent}
                    onChange={(e) => setNewEvent(e.target.value)}
                    required
                />
                    
                <button className="btn btn-outline-secondary" type="submit" 
                    width='5%'
                    id="button-addon2" aria-label='Add Item' 
                    onClick={() => inputRef.current.focus() }
                    >Submit</button>
            </div>
                
            </form>
        </div>
    )
}

export default AddEvent