import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        investing_virgin: true
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const data = { ...this.state.data, [e.target.name]: newValue }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="form-container">
        <section className="formTemplate">
          <div className="userForm form-group">
            <h2 className="formHeading vinco">opeN accouNt</h2>
            <form className="centre"onSubmit={this.handleSubmit}>
              <div className="formBackground form-group">
                <label className="vincoBold">title</label>
                <input
                  className={`form-input col-12 ${this.state.errors.title ? 'is-error' : ''}`}
                  type="text"
                  id="title"
                  name="title"
                  placeholder="TITLE"
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.title ? 'Title is required' : ''}`}</p> */}

                <label className="vincoBold">first name</label>
                <input
                  className={`form-input col-12 ${this.state.errors.first_name ? 'is-error' : ''}`}
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="FIRST NAME"
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.first_name ? 'First name is required' : ''}`}</p> */}

                <label className="vincoBold">surname</label>
                <input
                  className={`form-input col-12 ${this.state.errors.last_name ? 'is-error' : ''}`}
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="SURNAME"
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.last_name ? 'Surname is required' : ''}`}</p> */}

                <label className="vincoBold">username</label>
                <input
                  className={`form-input col-12 ${this.state.errors.username ? 'is-error' : ''}`}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="CHOOSE YOUR USERNAME"
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.username ? 'A username is required' : ''}`}</p> */}

                <label className="vincoBold">email</label>
                <input
                  className={`form-input col-12 ${this.state.errors.email ? 'is-error' : ''}`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.email ? 'An email is required' : ''}`}</p> */}

                <label className="vincoBold">date of birth (yyyy-mm-dd)</label>
                <input
                  className={`form-input col-12 ${this.state.errors.dob ? 'is-error' : ''}`}
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="DATE OF BIRTH"
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.dob ? 'Date of birth is required' : ''}`}</p> */}

                <label className="form-checkbox vinco">
                  <input 
                    className={`form-input col-12 ${this.state.errors.investing_virgin ? 'is-error' : ''}`}
                    type="checkbox"
                    name="investing_virgin"
                    checked={this.state.data.investing_virgin}
                    onChange={this.handleChange}
                  /> 
                  <i className="form-icon"></i> new to investing? 
                </label>

                <label className="vincoBold">password</label>
                <input
                  className={`form-input col-12 ${this.state.errors.password ? 'is-error' : ''}`}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="PASSWORD"
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.password ? 'Passwords need to be a minimum of 8 charachters long and contain at least one number' : ''}`}</p> */}

                <label className="vincoBold">password confirmation</label>
                <input
                  className={`form-input col-12 ${this.state.errors.password_confirmation ? 'is-error' : ''}`}
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder="CONFIRM YOUR PASSWORD"
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.password_confirmation ? 'The passwords do not match' : ''}`}</p> */}

                <br />
                <div className="centre">
                  <button className="btn btn-primary btn-sm vinco" type="submit">create my VINco accouNt</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}
    
export default Register

