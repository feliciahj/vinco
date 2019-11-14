import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (
      <section>

        <div className="form-group">
          <h2>Register</h2>
          <form className="centre" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                className={`form-input col-12 ${this.state.errors.title ? 'is-error' : ''}`}
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.title ? 'Title is required' : ''}`}</p>

              <label>First name</label>
              <input
                className={`form-input col-12 ${this.state.errors.first_name ? 'is-error' : ''}`}
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First name"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.first_name ? 'First name is required' : ''}`}</p>

              <label>Surname</label>
              <input
                className={`form-input col-12 ${this.state.errors.last_name ? 'is-error' : ''}`}
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Surname"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.last_name ? 'Surname is required' : ''}`}</p>

              <label>Username</label>
              <input
                className={`form-input col-12 ${this.state.errors.username ? 'is-error' : ''}`}
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.username ? 'A username is required' : ''}`}</p>

              <label>Email</label>
              <input
                className={`form-input col-12 ${this.state.errors.email ? 'is-error' : ''}`}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.email ? 'An email is required' : ''}`}</p>

              <label>Date of birth (MM/DD/YY)</label>
              <input
                className={`form-input col-12 ${this.state.errors.dob ? 'is-error' : ''}`}
                type="text"
                id="dob"
                name="dob"
                placeholder="Date of birth"
                onChange={this.handleChange}
              />
              <p className="form-input-hint">{`${this.state.errors.dob ? 'Date of birth is required' : ''}`}</p>

              <label className="form-checkbox">
                <input 
                  className={`form-input col-12 ${this.state.errors.investing_virgin ? 'is-error' : ''}`}
                  type="checkbox"
                  name="investing_virgin"
                  checked={this.investing_virgin}
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
                <button className="btn btn-primary btn-lg" type="submit">Register!</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
    
export default Register

