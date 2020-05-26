import React, { useContext } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import {Information} from './components/Information'
import {Task} from './components/Task'
import {Recovery} from './components/Recovery'
import {Login} from './components/Login'
import {Register} from './components/Register'

import {useState} from 'react'
import Home from './components/Home';

function App() {
  const OnlineContext = React.createContext(true)
  return (
    <OnlineContext.Provider value={true}>
      <Router>
        <Redirect from='/' to='home'/>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route exact path='/home/:path'>
          <Home/>
        </Route>
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
