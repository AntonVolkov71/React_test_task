import React from 'react'
import './Heading.css'
import Radium from 'radium'

const Heading = (props) => {
  return (
    <tr className='Heading'>
      <td>Tool name
        <span> 
          <button id='top' onClick={props.onClick}></button>
          <span>
            <button id='bottom' onClick={props.onClick}></button>
          </span>
        </span>
      </td>
      <td>Used on</td>
      <td>Type</td>
      <td>Status</td>
    </tr>
  )
}

export default Radium(Heading)
