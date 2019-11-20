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
    const { data } = this.state
    return (
      <div className="form-container">
        <section className="formTemplate">
          <div className="userForm form-group">
            <h2 className="formHeading">update my account</h2>
            <form className="centre"onSubmit={this.handleSubmit}>
              <div className="formBackground form-group">
                <label>title</label>
                <input
                  className={`form-input col-12 ${this.state.errors.title ? 'is-error' : ''}`}
                  type="text"
                  id="title"
                  name="title"
                  placeholder="TITLE"
                  value={data.title}
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.title ? 'Title is required' : ''}`}</p> */}
  
                <label>first name</label>
                <input
                  className={`form-input col-12 ${this.state.errors.first_name ? 'is-error' : ''}`}
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="FIRST NAME"
                  value={data.first_name}
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.first_name ? 'First name is required' : ''}`}</p> */}
  
                <label>surname</label>
                <input
                  className={`form-input col-12 ${this.state.errors.last_name ? 'is-error' : ''}`}
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="SURNAME"
                  value={data.last_name}
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.last_name ? 'Surname is required' : ''}`}</p> */}
  
                <label>username</label>
                <input
                  className={`form-input col-12 ${this.state.errors.username ? 'is-error' : ''}`}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="CHOOSE YOUR USERNAME"
                  value={data.username}
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.username ? 'A username is required' : ''}`}</p> */}
  
                <label>email</label>
                <input
                  className={`form-input col-12 ${this.state.errors.email ? 'is-error' : ''}`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  value={data.email}
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.email ? 'An email is required' : ''}`}</p> */}
  
                <label>date of birth (YYYY-MM-DD)</label>
                <input
                  className={`form-input col-12 ${this.state.errors.dob ? 'is-error' : ''}`}
                  type="text"
                  id="dob"
                  name="dob"
                  placeholder="DATE OF BIRTH"
                  value={data.dob}
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.dob ? 'Date of birth is required' : ''}`}</p> */}
  
                <label className="form-checkbox">
                  <input 
                    className={`form-input col-12 ${this.state.errors.investing_virgin ? 'is-error' : ''}`}
                    type="checkbox"
                    name="investing_virgin"
                    checked={data.investing_virgin}
                    onChange={this.handleChange}
                  /> 
                  <i className="form-icon"></i> new to investing? 
                </label>
  
                <label>password</label>
                <input
                  className={`form-input col-12 ${this.state.errors.password ? 'is-error' : ''}`}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={data.password}
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.password ? 'Passwords need to be a minimum of 8 charachters long and contain at least one number' : ''}`}</p> */}
  
                <label>password confirmation</label>
                <input
                  className={`form-input col-12 ${this.state.errors.password_confirmation ? 'is-error' : ''}`}
                  type="password"
                  id="password_confirmation"
                  name="password_confirmation"
                  placeholder="CONFIRM YOUR PASSWORD"
                  value={data.password_confirmation}
                  onChange={this.handleChange}
                />
                {/* <p className="form-input-hint">{`${this.state.errors.password_confirmation ? 'The passwords do not match' : ''}`}</p> */}
  
                <br />
                <div className="spaceBetween">
                  <button className="btn btn-sm" onClick={() => this.props.history.goBack()}>back dashboard</button>
                  <button className="btn btn-primary btn-sm" type="submit">update my account</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

export default DashboardEdit