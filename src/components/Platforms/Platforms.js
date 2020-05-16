import React, { Component } from 'react'
import './Platforms.css'

import Heading from './Heading/Heading'
import Rows from './Rows/Rows'
export default class Platforms extends Component {
  render() {
    return (
      <div className='Platforms'>
        <table>
          <thead>
          <Heading />
          <Rows/>
            
          </thead>
        </table>

      </div>
    )
  }
}
