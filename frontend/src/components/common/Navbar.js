import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../../lib/auth'
import axios from 'axios'

class Navbar extends React.Component {
  constructor() {
    super()

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    Auth.logout()
    this.props.history.push('/')
  }

  // Remember to make the relevant links authenticated later!
  render() {
    return (
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
        </div>
        <div className="input-group input-inline nav-links">
          <Link className="btn btn-link nav-item" to="/funds">Browse funds</Link>
          <Link className="btn btn-link nav-item" to="/map">Map</Link>
          <Link className="btn btn-link nav-item" to="/register">Register</Link>
          <Link className="btn btn-link nav-item" to="/login">Login</Link>
          <Link className="btn btn-link nav-item" to="/dashboard">Dashboard</Link>
          <a onClick={this.handleLogout} className="btn btn-link nav-item">Log Out</a>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)