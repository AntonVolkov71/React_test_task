import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import Marketings from './containers/Marketings/Marketings'

export default class App extends Component {
  render() {
    return (
      <Switch>
      <Route path="/" component={Marketings} />
      </Switch>
    )
  }
}
