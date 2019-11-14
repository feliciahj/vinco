import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'spectre.css'
import '../src/style.scss'


// Import components here:

// COMMON
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
// import SecureRoute from './components/common/SecureRoute'

// USER
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './components/auth/Dashboard'

// FUNDS
import FundIndex from './components/funds/FundIndex'

// MAP
// import GlobalMap from './components/map/GlobalMap'


const App = () => (
  <>
    <BrowserRouter>
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/funds" component={FundIndex} />
      {/* <Route path="/map" component={GlobalMap} /> */}
    </Switch>
    </>
    </BrowserRouter>
  </>
)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

