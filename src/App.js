import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Form from './components/Auth/Form'
import SignUp from './components/Auth/SignUp'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/Form" component={Form} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
