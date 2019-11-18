import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../../lib/auth'

class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null,
      my_funds: '',
      followed_funds: ''
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get('/api/dashboard', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err))
  }

  handleDelete() {
    axios.delete('/api/dashboard', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        Auth.logout()
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.user.id
  }

  render() {
    if (!this.state.user) return null
    console.log(this.state)
    // console.log(this.props.location.state.from)
    const { user } = this.state
    return (
      <section className="container">
        <div className="columns">
          <div className="column col-12">My dashboard</div>
          <div className="column col-6">
            <h3>{user.title} {user.first_name} {user.last_name}</h3>
          </div>
          <div className="column col-6">
            <div>My followed funds:</div>
          </div>
          <div className="column col-12">My portfolio</div>
          <div className="column col-12">
            <>
              <Link to={'/dashboard/edit'} data={user} className="btn btn-primary">
                 Edit my account
              </Link>
              <span> </span>
              <button onClick={this.handleDelete} className="btn btn-error">Delete my account</button>
            </>
          </div>
        </div>
      </section >
    )
  }
}

export default Dashboard