import React from 'react'

const SearchEvent = ({search,setSearch}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input 
            id="search" 
            type="text" 
            className="form-control" 
            max-width={100}
            placeholder='Search Event'
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}

        />
        
    </form>
  )
}

export default SearchEvent