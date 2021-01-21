import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Form from './components/Auth/Form'
import SignUp from './components/Auth/SignUp'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
import Contact from './components/Contact'
const App = () => {
  return (
    <div >
      <Router>
        <div className="navBar">
          <Navbar />
        </div>
        <Switch>
          <div className="App">
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/form" component={Form} />

            <Route exact path={["/","/home"]} component={Home} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App
