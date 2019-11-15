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
          <Link className="homeLogo" to="/">V</Link>
        </div>
        <div className="input-group input-inline nav-links">
          <Link className="btn btn-link nav-item navItem" to="/funds">browse funds</Link>
          <Link className="btn btn-link nav-item navItem" to="/map">map</Link>
          <Link className="btn btn-link nav-item navItem vinco" to="/register">open account</Link>
          <Link className="btn btn-link nav-item navItem vinco" to="/login">login</Link>
          <Link className="btn btn-link nav-item navItem vinco" to="/dashboard">dashboard</Link>
          <a onClick={this.handleLogout} className="btn btn-link nav-item navItem vinco">logout</a>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)