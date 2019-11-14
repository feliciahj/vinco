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
      <div className="centre">
        <h3 className="centre"><span>You are trading {fund.name}</span></h3>
      </div>
      <div className="columns">
        <div className="column col-6">
          <FundCard key={fund.id} {...fund} 
          />
        </div>
        <div className="column col-6">
          <div>Trade info</div>
        </div>
        <div className="column col-12 centre">
          <Link to="/dashboard">
            <button className="btn btn-lg btn-primary">Complete trade</button>
          </Link>
        </div>
      </div>
    </>
    )
  }
}

export default Trade