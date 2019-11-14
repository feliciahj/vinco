import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'

import 'spectre.css'
// import 'style.scss'


// Import components here:

// COMMON
import Home from './components/common/Home'
// import Navbar from './components/common/Navbar'

// AUTH
import Register from './components/auth/Register'
import Login from './components/auth/Login'


const App = () => (
  <>
    <BrowserRouter>
    <>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </>
    </BrowserRouter>
  </>
)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)

