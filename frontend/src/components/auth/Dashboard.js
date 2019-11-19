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
        <br />
        <div className="columns">
          <br />
          <h3 className="column col-12 vinco borderBottom">my dashboaRd</h3>
          <button className="column col-12 btn btn-link vinco alignRight" onClick={() => this.props.history.goBack()}>
              back
          </button>
          <div className="column col-12">
            <div>{user.title} {user.first_name} {user.last_name}</div>
            <br/>
            <div>Contact details: {user.email}</div>
            <br/>
            <div>Date of birth: {user.dob}</div>
            <br/>
            <Link to={'/dashboard/edit'} data={user} className="btn btn-success btn-sm vinco">
                 edit My details
            </Link>
            <br/>
            <br/>
          </div>
          <br/>
          <h5 className="column col-12 vinco borderBottom">my poRtFolio</h5>
          <br/>
          <h5 className="column col-12 vinco borderBottom">FolloWed Funds</h5>
          <div className="column col-12">
            <br/>
            <>
              <br/>
              <span> </span>
              <button onClick={this.handleDelete} className="btn btn-error btn-sm vinco">delete My accouNt</button>
            </>
          </div>
        </div>
      </section >
    )
  }
}

export default Dashboard