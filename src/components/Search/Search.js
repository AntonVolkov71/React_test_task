import React, { Component } from 'react'
import './Search.css'
export default class Search extends Component {
  render() {
    return (
      <div className='Search' >
      <span role='img' aria-label='search'>&#128269;</span>
        <input 
          type='text'
        />
      </div>
    )
  }
}
