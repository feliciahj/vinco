import React from 'react'
import axios from 'axios'

import FundCard from '../funds/FundCard'

class FundIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      funds: null
    }

  } 

  componentDidMount() {
    axios.get('/api/funds')
      .then(res => this.setState({ funds: res.data }))
      .catch(err => console.log(err))
  }
  
  render() {
    if (!this.state.funds) return null
    return (
      <>
      <h1>Fund index page</h1>
      <div className="centre">
        <div className="container">
          {this.state.funds.map(fund => (
            <FundCard key={fund.id} {...fund} />
          ))}
        </div>
      </div>
      </>
    )
  }
}

export default FundIndex