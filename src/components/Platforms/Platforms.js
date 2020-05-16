import React from 'react'
import './Platforms.css'

import Heading from './Heading/Heading'
import Rows from './Rows/Rows'

const Platforms = (props) => {
  const tools = props.tools

  return (
    <div className='Platforms'>
      <table>
        <thead>
          <Heading onClick={props.onClick}/>
          <Rows tools={tools} />
        </thead>
      </table>
    </div>
  )
}

export default Platforms
