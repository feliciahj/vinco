import React from 'react'
import { Link } from 'react-router-dom'

import FundCard from './FundCard'

class Trade extends React.Component {
  constructor() {
    super() 

    this.state = {
      fund: ''
    }

  }

  render() {
    const fund = this.props.location.state.fund
    return (
      <>
      {/* <div className="centre">
        <h3 className="centre"><span>You are trading <span className="tanzanite">{fund.name}</span></span></h3>
      </div> */}
      <div className="container midpoint">
        <div className="columns midpoint">
          <div className="column col-auto">
            <FundCard key={fund.id} {...fund} 
            />
          </div>
          <div className="column col-auto midpoint centre">
            <Link to="/dashboard">
              <button className="btn btn-lg btn-success">BUY</button>
            </Link>
            <br/>
            <Link to="/dashboard">
              <button className="btn btn-lg btn-error">SELL</button>
            </Link>
            <br/>
            <button className="btn btn-primary btn-sm" onClick={() => this.props.history.goBack()}>
              I changed my mind
            </button>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default Trade