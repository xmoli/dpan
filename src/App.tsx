import React from 'react';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom'
import './App.css';
import {Information} from './components/Information'
import {Task} from './components/Task'
import {Recovery} from './components/Recovery'
import {Login} from './components/Login'
import {Register} from './components/Register'

import {useState} from 'react'
import { Home } from './components/Home';

const OnlineContext = React.createContext(useState(false))
function App() {
  const online = useState(false)

  return (
    <OnlineContext.Provider value={online}>
      <Router>
        <Redirect from='/' to='home'/>
        <Route exact path='/home' components={Home}/>
        <Route path='/home/:path' components={Home}/>
        <Route path='/task' components={Task}/>
        <Route path='/information' components={Information}/>
        <Route path='/recovery' components={Recovery}/>
        <Route path='/login' components={Login}/>
        <Route path='/register' components={Register}/>
      </Router>
    </OnlineContext.Provider>
  )
}

export default App;
