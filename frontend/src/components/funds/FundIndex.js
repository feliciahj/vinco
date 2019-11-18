import React from 'react'
import axios from 'axios'

import FundFilter from '../funds/FundFilter'
import FundCard from '../funds/FundCard'

class FundIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      funds: null,
      region: 'All',
      styles: 'All',
      house: 'All',
      structure: 'All'
    }
    this.handleStyles = this.handleStyles.bind(this)
    this.handleHouse = this.handleHouse.bind(this)
    this.handleStructure = this.handleStructure.bind(this)
  } 

  componentDidMount() {
    axios.get('/api/funds')
      .then(res => this.setState({ funds: res.data }))
      .catch(err => console.log(err))
  }

  handleStyles(e) {
    this.setState({ styles: e.target.value })
  }

  handleHouse(e) {
    this.setState({ house: e.target.value })
  }

  handleStructure(e) {
    this.setState({ structure: e.target.value })
  }

  fundFilter() {
    // const region = this.props.location.state.from
    const { styles, house, structure } = this.state
    if (!this.state.funds) return null
    const filteredFunds =  this.state.funds.filter(fund => {
      // return (fund.region.region === region || region === 'All') 
      // // &&
      // return (fund.house === house || house === 'All')
      // &&
      // ((fund.structure.vehicle === structure || structure === 'All'))
      // &&
      // ((fund.styles.find(style => style.name === styles) || styles === 'All'))
    })
    return filteredFunds
  }

  render() {
    if (!this.state.funds) return null
    return (
      <>
      <div>
        <FundFilter
          handleHouse={this.handleHouse}
          handleStructure={this.handleStructure}
          handleStyles={this.handleStyles}
        />
      </div>
 
      {this.fundFilter().length === 0
        ?
        <div>
          <p>No funds availiable with that criteria, please revise your search</p>
        </div>
        :
          <>
              <div className="fundContainer">
                {this.fundFilter().map(fund => (
                  <FundCard key={fund.id} {...fund} />
                ))}
              </div>
          </> 
      }
      </>
    )
  }
}

export default FundIndex


