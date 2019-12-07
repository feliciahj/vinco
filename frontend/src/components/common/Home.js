import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()


  }

  render() {
    return (
      <>
      <div className="container almostMidpoint">
        <Link style={{ textDecoration: 'none' }} to="/login">
          <h1 className="vinco homeTitle">ViNco</h1>
        </Link>
        <div className="centre">
          <span className="line grey"></span>
        </div>
        <br/>
        <h5 className="grey">[conquer investing]</h5>
      </div>
      </>
    )
  }
}

export default Home