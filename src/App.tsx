import React from 'react';
import {HashRouter as Router, Route, Redirect} from 'react-router-dom'
import './App.css';
import {Information} from './components/Information'
import {Task} from './components/Task'
import {Recovery} from './components/Recovery'
import {FileArea} from './components/FileField'
import {Login} from './components/Login'
import {Register} from './components/Register'

import {useState} from 'react'
import {myRequest} from './components/Request'

const RequestContext = React.createContext(new myRequest())
const OnlineContext = React.createContext(useState(false))
function App() {
  const online = useState(false)

  let request = new myRequest()
  return (
    <RequestContext.Provider value={request}>
    <OnlineContext.Provider value={online}>
      <Router>
        <Route path='/' />
        <Route exact path='/home' components={FileArea}/>
        <Route path='/home/:path' components={FileArea}/>
        <Route path='/task' components={Task}/>
        <Route path='/information' components={Information}/>
        <Route path='/recovery' components={Recovery}/>
        <Route path='/login' components={Login}/>
        <Route path='/register' components={Register}/>
      </Router>
    </OnlineContext.Provider>
    </RequestContext.Provider>
  )
}

export default App;
