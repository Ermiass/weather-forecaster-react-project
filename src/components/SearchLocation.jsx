import React from 'react'
const SearchLocation = ({seachTerm,handleSearch,handleFormSubmit}) => {
  return (
    <form onSubmit={handleFormSubmit}>
    <label   htmlFor="searchTerm">Search by Location:</label>
                <input  
                    type="text" 
                    name="searchTerm" 
                    id="searchTerm" 
                    placeholder="Fresno CA"
                    value={seachTerm} 
                    onChange={handleSearch}
                />
                 <button>Search</button>
    </form>
  )
}

export default SearchLocation