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
import DashboardEdit from './components/auth/DashboardEdit'

// FUNDS
import FundIndex from './components/funds/FundIndex'
import FundShow from './components/funds/FundShow'
import Trade from './components/funds/Trade'

// MAP
import GlobalMap from './components/map/GlobalMap'


const App = () => (
  <>
    <BrowserRouter>
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />

      <Route path="/dashboard/edit" component={DashboardEdit} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/trade" component={Trade} />
      <Route path="/funds/:id" component={FundShow} />
      <Route path="/funds" component={FundIndex} />
      <Route path="/map" component={GlobalMap} />
    </Switch>
    </>
    </BrowserRouter>
  </>
)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

