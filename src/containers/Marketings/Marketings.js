import React, { Component } from 'react'
import './Marketings.css'

import Platforms from '../../components/Platforms/Platforms'
import Search from '../../components/Search/Search'

export default class Marketings extends Component {

  state = {

  }


  render() {
    return (
      <div className='Marketings'>
        <h1>Task</h1>
        <Search />
        <Platforms />

      </div>
    )
  }
}
