import React from 'react'
import './SearchResult.css'
const SearchResult = ({result}) => {
  return (
    <div onClick={(e) => alert(`you clicked on ${result.name}`)} className='search-result'>{result.name}</div>
  )
}

export default SearchResult