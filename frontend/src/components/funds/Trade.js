import React from 'react'
import { Link } from 'react-router-dom'

import ShortFundCard from './ShortFundCard'

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
      <div className="container midpoint">
        <div className="columns midpoint">
          <div className="column col-auto">
            <ShortFundCard key={fund.id} {...fund} 
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
            <br/>
            <br/>
            <button className="btn btn-link btn-sm" onClick={() => this.props.history.goBack()}>
              BACK
            </button>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default Trade