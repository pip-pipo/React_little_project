import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Form from './components/Auth/Form'
import SignUp from './components/Auth/SignUp'
import Home from './components/Home'
import Welcome from './components/pages/Welcome'
const App = () => {
  return (
    <div className="bg_dark">
      <Router>
        <div className="navBar">
          <Home />
        </div>
        <div className="">
          <Switch>
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Form} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
