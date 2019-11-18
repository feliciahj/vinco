import React from 'react'
import axios from 'axios'
import Auth from '../../../lib/auth'

import UserForm from '../auth/UserForm'

class DashboardEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        title: '',
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        dob: '',
        investing_virgin: '',
        password: '',
        password_confirmation: ''
      }
      // errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/dashboard', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put('/api/dashboard', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        this.props.history.push('/dashboard')
      })
      .catch(err => console.log(err))
  }

  // Remember to update the errors part later and pass them down to the UserForm!

  render() {
    return (
      <section>
        <div>
          <UserForm>
           data={this.state.data}
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
          </UserForm>
        </div>
      </section>
    )
  }
}

export default DashboardEdit