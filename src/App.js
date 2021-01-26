import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Form from './components/Auth/Form'
import SignUp from './components/Auth/SignUp'
import Home from './components/Home'

const App = () => {
  return (
    <div className="bg_dark">
      <Router>
        <div className="navBar">
          <Home/>
        </div>
        <Switch>
          <div className="App">
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Form} />
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App
