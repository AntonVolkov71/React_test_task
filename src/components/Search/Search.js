import React from 'react'
import './Search.css'

const Search = (props) => {
  return (
    <div className='Search' >
      <span role='img' aria-label='search'>&#128269;</span>
      <input
        type='text'
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Search
