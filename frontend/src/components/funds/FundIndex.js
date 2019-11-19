import React from 'react'
import axios from 'axios'

import FundFilter from '../funds/FundFilter'
import FundCard from '../funds/FundCard'

class FundIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      funds: null,
      search: '',
      focus: 'All',
      styles: 'All',
      house: 'All',
      structure: 'All'
    }
    this.handleStyles = this.handleStyles.bind(this)
    this.handleHouse = this.handleHouse.bind(this)
    this.handleStructure = this.handleStructure.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRegion = this.handleRegion.bind(this)
  } 

  componentDidMount() {
    axios.get('/api/funds')
      .then(res => this.setState({ funds: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRegion(e) {
    this.setState({ focus: e.target.value })
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
    if (this.props.location.state) {
      const filtered = this.state.funds.filter(fund => fund.region.region.toLowerCase() === this.props.location.state.from)
      this.props.location.state = ''
      return filtered
    }
    const { styles, house, structure, search, focus } = this.state
    const re = new RegExp(search, 'i')
    if (!this.state.funds) return null
    const filteredFunds =  this.state.funds.filter(fund => {
      return re.test(fund.name)
      &&
      (fund.region.region === focus || focus === 'All')
      &&
      (fund.house === house || house === 'All')
      &&
      ((fund.structure.vehicle === structure || structure === 'All'))
      &&
      ((fund.styles.find(style => style.name === styles) || styles === 'All'))
    })
    return filteredFunds
  }

  // rankFunds() {

  // }

  render() {
    if (!this.state.funds) return null
    console.log(this.state.funds)
    return (
      <>
      <div className="centre">
        <div>
          <input
            placeholder="Search by fund name"
            onChange={this.handleChange}
            name="search"
          />
        </div>
        <div>
          <FundFilter
            handleRegion={this.handleRegion}
            handleHouse={this.handleHouse}
            handleStructure={this.handleStructure}
            handleStyles={this.handleStyles}
          />
        </div>
      </div>
      <div className="centre">
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
      </div>
      </>
    )
  }
}

export default FundIndex


