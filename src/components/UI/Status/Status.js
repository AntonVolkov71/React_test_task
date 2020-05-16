import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import './Status.css'

const Status = (props) => {
  return (
    <Auxiliary>
      <button className='Status'>{props.status === 'enable' ? 'ON' : 'OFF'}</button>
      </Auxiliary>
  )
}

export default Status
