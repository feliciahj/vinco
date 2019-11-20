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
        <br/>
        <br/>
        <div className="columns">
          <div className="column col-12 spaceBetween">
            <div className="popover popover-right">
              <button className="btn btn-success btn-sm">Personal info</button>
              <div className="popover-container dashboardCard">
                <div className="card dashboardCard">
                  <div className="card-header">
                    {user.title} {user.first_name} {user.last_name}
                  </div>
                  <div className="card-body">
                    <div>Contact details: {user.email}</div>
                    <br/>
                    <div>Date of birth: {user.dob}</div>
                  </div>
                  <div className="card-footer spaceBetween">
                    <Link to={'/dashboard/edit'} data={user} className="btn btn-link btn-sm">
                      EDIT
                    </Link>
                    <button onClick={this.handleDelete} className="btn btn-error btn-sm">Delete my account</button>
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => this.props.history.goBack()}>BACK</button>
          </div>
          <div className="portfolioColumns">
            <div className="portfolio borderRight marginRight">
              <h3 className="tanzanite marginLeft">MY PORTFOLIO</h3>
            </div>
            <div className="followed">
              <h4 className="tanzanite">FOLLOWED FUNDS</h4>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default Dashboard