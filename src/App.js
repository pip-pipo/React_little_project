import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Form from './components/Auth/Form'
import SignUp from './components/Auth/SignUp'
import Home from './components/Home'
import Blog from './components/pages/Blog'
import Welcome from './components/pages/Welcome'
import WritePost from './components/pages/WritePost'
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
            <Route exact path="/write_post" component={WritePost} />
            <Route exact path="/blog" component={Blog} />


          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
