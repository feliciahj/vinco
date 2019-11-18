import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../../lib/auth'

class Navbar extends React.Component {
  constructor() {
    super()

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    Auth.logout()
    this.props.history.push('/')
  }

  render() {
    return (
      <nav className="navbar">
        <div>
          <Link className="btn btn-link nav-item navItem" to="/">VINco</Link>
        </div>
        <div className="input-group input-inline nav-links">
          {!Auth.isAuthenticated() && <Link className="btn btn-link nav-item navItem" to="/funds">browse funds</Link>}
          {!Auth.isAuthenticated() && <Link className="btn btn-link nav-item navItem" to="/map">map</Link>}
          {!Auth.isAuthenticated() && <Link className="btn btn-link nav-item navItem vinco" to="/register">open account</Link>}
          {!Auth.isAuthenticated() && <Link className="btn btn-link nav-item navItem vinco" to="/login">login</Link>}
          {!Auth.isAuthenticated() && <Link className="btn btn-link nav-item navItem vinco" to="/dashboard">dashboard</Link>}
          {!Auth.isAuthenticated() && <a onClick={this.handleLogout} className="btn btn-link nav-item navItem vinco">logout</a>}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)