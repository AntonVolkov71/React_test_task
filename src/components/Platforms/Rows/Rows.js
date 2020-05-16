import React from 'react'
import Radium from 'radium';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import "./Rows.css"

import Status from '../../UI/Status/Status'

const Rows = (props) => {

 const setStatus= (status)=> {
    if(status === 'blocked') return ( <span role='img' aria-label='status'>&#128274;</span>)
    
    if(status === 'enable' || status === 'disable') return (<Status status={status}/>)
  }

  return (
    <Auxiliary>
      {
        props.tools.map((el, ind) => {
          return (
            <tr
              className='Rows'
              key={el.id}
              id={el.id}
            >
              <th>{el.name}</th>
              <th>{el.sites}</th>
              <th>{el.type}</th>
              <th>{setStatus(el.status)}</th>
            </tr>
          )
        })
      }
    </Auxiliary>
  )
}

export default Radium(Rows)
