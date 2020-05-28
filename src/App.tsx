import React, { useContext } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import {Information} from './components/Information'
import {Task} from './components/Task'
import {Recovery} from './components/Recovery'
import {Login} from './components/Login'
import {Register} from './components/Register'

import Home from './components/Home';

const OnlineContext = React.createContext(false)

function App() {
  const online = true
  return (
    <OnlineContext.Provider value={online}>
      <Router>
        <Route exact path='/'>
          {online ? 
          <Redirect to="/home"/>
          :
          <Redirect to="/login"/>
          }
        </Route>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route exact path='/home/:path'>
          <Home/>
        </Route>
        <Route path='/task' components={Task}/>
        <Route path='/information' components={Information}/>
        <Route path='/recovery' components={Recovery}/>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
      </Router>
    </OnlineContext.Provider>
  )
}

export {App,OnlineContext}
