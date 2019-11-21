import React from 'react'
import axios from 'axios'
import Auth from '../../../lib/auth'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data, error: '' })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        this.props.history.push('/map')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
    <div className="form-container">
      <div className="container midpoint">
        <section className="formTemplate">
          <div className="userForm form-group">
            <h2 className="formHeading">welcome back!</h2>
            <form className="centre" onSubmit={this.handleSubmit}>
              <div className="formBackground form-group centre">
                <label className="centre form-label login" htmlFor="email">email</label>
                <input 
                  className={`form-input col-7 ${this.state.error ? 'is-error' : ''}`}
                  name="email" 
                  type="text" 
                  id="email" 
                  placeholder="EMAIL" 
                  onChange={this.handleChange}/>
                {/* <p className="form-input-hint">{`${this.state.error ? 'Incorrect password' : ''}`}</p> */}
              
                <label className="form-label login" htmlFor="password">password</label>
                <input 
                  className={`form-input col-7 ${this.state.error ? 'is-error' : ''}`}
                  name="password" 
                  type="password"
                  id="password" 
                  placeholder="PASSWORD" 
                  onChange={this.handleChange}
                />
                {/* {this.state.error && <p className="form-input-hint is-error">{this.state.error}</p>} */}
                <br />
                <div className="centre">
                  <button className="btn btn-primary" type="submit">login</button>
                </div>
                <div>
                  <Link to="/register">
                    <br/>
                    <button className="btn btn-link">don't have an account?</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
      </>
    )
  }
}

export default Login