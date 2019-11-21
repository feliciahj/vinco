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
          {localStorage.token && <Link className="btn btn-link nav-item logo" to="/">VINco</Link>}
        </div>
        <div className="input-group input-inline nav-links">
          {localStorage.token && <Link className="btn btn-link nav-item navItem tanzanite" to="/funds">browse funds</Link>}
          {localStorage.token && <Link className="btn btn-link nav-item navItem tanzanite" to="/map">map</Link>}
          {!localStorage.token && <Link className="btn btn-link nav-item navItem tanzanite" to="/register">open account</Link>}
          {!localStorage.token && <Link className="btn btn-link nav-item navItem tanzanite" to="/login">login</Link>}
          {localStorage.token && <Link className="btn btn-link nav-item navItem tanzanite" to="/dashboard">dashboard</Link>}
          {localStorage.token && <a onClick={this.handleLogout} className="btn btn-link nav-item navItem tanzanite">logout</a>}
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)