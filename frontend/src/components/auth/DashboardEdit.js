import React from 'react'
import axios from 'axios'
import Auth from '../../../lib/auth'

class DashboardEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: null,
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/api/dashboard', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        // console.log('yoyo', res.data)
        this.setState({ data: res.data })
      })
      .catch(err => console.log(err))
  }

  handleChange(e) {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const data = { ...this.state.data, [e.target.name]: newValue }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
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

  render() {
    console.log(this.state)
    if (!this.state.data) return null
    const { data, errors } = this.state
    return (
      <section className="formTemplate">
        <div className="userForm form-group">
          <form className="centre" onSubmit={this.handleSubmit}>
            <div className="formBackground form-group">
              <label>Title</label>
              <input
                className={`form-input col-12 ${errors.title ? 'is-error' : ''}`}
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                value={data.title}
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${errors.title ? 'Title is required' : ''}`}</p>

              <label>First name</label>
              <input
                className={`form-input col-12 ${errors.first_name ? 'is-error' : ''}`}
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First name"
                value={data.first_name}
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${errors.first_name ? 'First name is required' : ''}`}</p>

              <label>Surname</label>
              <input
                className={`form-input col-12 ${errors.last_name ? 'is-error' : ''}`}
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Surname"
                value={data.last_name}
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${errors.last_name ? 'Surname is required' : ''}`}</p>

              <label>Username</label>
              <input
                className={`form-input col-12 ${errors.username ? 'is-error' : ''}`}
                type="text"
                id="username"
                name="username"
                placeholder="Choose your username"
                value={data.username}
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${errors.username ? 'A username is required' : ''}`}</p>

              <label>Email</label>
              <input
                className={`form-input col-12 ${errors.email ? 'is-error' : ''}`}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${errors.email ? 'An email is required' : ''}`}</p>

              <label>Date of birth (YYYY-MM-DD)</label>
              <input
                className={`form-input col-12 ${errors.dob ? 'is-error' : ''}`}
                type="text"
                id="dob"
                name="dob"
                placeholder="Date of birth"
                value={data.dob}
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${errors.dob ? 'Date of birth is required' : ''}`}</p>

              <label className="form-checkbox">
                <input
                  className={`form-input col-12 ${errors.investing_virgin ? 'is-error' : ''}`}
                  type="checkbox"
                  name="investing_virgin"
                  checked={data.investing_virgin}
                  onChange={this.handleChange}
                />
                <i className="form-icon"></i> New to investing?
              </label>
              <label>Password</label>
              <input
                className={`form-input col-12 ${this.state.errors.password ? 'is-error' : ''}`}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.password ? 'Passwords need to be a minimum of 8 charachters long and contain at least one number' : ''}`}</p>

              <label>Password confirmation</label>
              <input
                className={`form-input col-12 ${this.state.errors.password_confirmation ? 'is-error' : ''}`}
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Confirm your password"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.password_confirmation ? 'The passwords do not match' : ''}`}</p>

              <br />
              <div className="centre">
                <button className="btn btn-primary btn-lg vinco" type="submit">update my accouNt</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default DashboardEdit