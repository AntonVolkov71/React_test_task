import React, { Component } from 'react'
import './Marketings.css'

import Platforms from '../../components/Platforms/Platforms'
import Search from '../../components/Search/Search'
import FindNot from '../../components/FindNot/FindNot'

export default class Marketings extends Component {

  state = {
    tools: [
      {
        "id": 1,
        "name": "ExpsaertSender",
        "sites": 0,
        "type": "email",
        "status": "blocked"
      },
      {
        "id": 2,
        "name": "Tag Commander",
        "sites": 0,
        "type": "tag_manager",
        "status": "blocked"
      },
      {
        "id": 3,
        "name": "Ysance",
        "sites": 0,
        "type": "dmp_crm",
        "status": "blocked"
      },
      {
        "id": 4,
        "name": "AT Internet",
        "sites": 1,
        "type": "analytics",
        "status": "enable"
      },
      {
        "id": 5,
        "name": "Content Square",
        "sites": 3,
        "type": "analytics",
        "status": "enable"
      },
      {
        "id": 6,
        "name": "Google Tag Manager",
        "sites": 2,
        "type": "tag_manager",
        "status": "enable"
      },
      {
        "id": 7,
        "name": "Heatmap",
        "sites": 1,
        "type": "heatmap",
        "status": "enable"
      },
      {
        "id": 8,
        "name": "Tealium",
        "sites": 0,
        "type": "dmp_crm",
        "status": "disable"
      },
      {
        "id": 9,
        "name": "Emarsys",
        "sites": 0,
        "type": "email",
        "status": "disable"
      }
    ],
    value: '',
    findSet: false,
    findTools: [],
    findErr: true,
    errFind: { err: 'Строка не найдена' },
  }

  findItem = (value) => {
    if (value.length === 0) {
      this.setState({
        findErr: true
      })
    }

    const resArray = []
    this.state.tools.forEach((el) => {
      if (el.name.toLowerCase().includes(value.toLowerCase()) > 0) {
        resArray.push(el)
      }
    })
    if (resArray.length === 0) {
      return this.setState({
        findErr: false
      })
    } else {
      this.setState({
        findTools: resArray,
        value,
        findSet: true,
        findErr: true
      })
    }
  }
  sortTools = (directionSort) => {

    const sort = this.state.tools
    directionSort === 'top'
      ? sort.sort((a, b) => a.name.localeCompare(b.name))
      : sort.sort((a, b) => b.name.localeCompare(a.name))

    this.setState({
      tools: sort
    })
  }
  render() {
    return (
      <div className='Marketings'>
        <h1>Task</h1>
        <Search
          value={this.state.value}
          onChange={event => this.findItem(event.target.value)} />

        {this.state.findErr
          ?
          <Platforms
            onClick={event => this.sortTools(event.target.id)}
            tools={!this.state.findSet ? this.state.tools : this.state.findTools}
          />
          : <FindNot />
        }
      </div>
    )
  }
}
