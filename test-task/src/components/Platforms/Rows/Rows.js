import React from 'react'
import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

import Status from '../../UI/Status/Status'
import classes "./Rows.css"

const Rows = () => {
  return (
    <Auxiliary>
    <tr className={classes.Rows}>
    <th>d</th>
    <th>d</th>
    <th><span role='img' aria-label='status'>&#128274;</span></th>
    <th><Status /></th>
  </tr>
  
  <tr className='Rows'>
    <th>d</th>
    <th>d</th>
    <th><span role='img' aria-label='status'>&#128274;</span></th>
    <th><Status /></th>
  </tr>
  </Auxiliary>
  )
}

export default Radium(Rows)
