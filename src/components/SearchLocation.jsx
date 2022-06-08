import React from 'react'
const SearchLocation = ({seachTerm,handleSearch,handleFormSubmit}) => {
  return (
    <form onSubmit={handleFormSubmit}>
    <label   htmlFor="searchTerm"></label>
                <input className='search-input'  
                    type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="Fresno CA"
                    value={seachTerm} 
                    onChange={handleSearch}
                />
                 <button className='searchBtn'>Search</button>
    </form>
  )
}

export default SearchLocation