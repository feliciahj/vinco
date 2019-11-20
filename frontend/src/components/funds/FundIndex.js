import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      structure: 'All',
      filteredList: []
    }
    this.handleStyles = this.handleStyles.bind(this)
    this.handleHouse = this.handleHouse.bind(this)
    this.handleStructure = this.handleStructure.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRegion = this.handleRegion.bind(this)
  } 

  componentDidMount() {
    axios.get('/api/funds')
      .then(res => this.setState({ funds: res.data }, this.fundFilter))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value }, this.fundFilter)
  }

  handleRegion(e) {
    this.setState({ focus: e.target.value }, this.fundFilter)
  }

  handleStyles(e) {
    this.setState({ styles: e.target.value }, this.fundFilter)
  }

  handleHouse(e) {
    this.setState({ house: e.target.value }, this.fundFilter)
  }

  handleStructure(e) {
    this.setState({ structure: e.target.value }, this.fundFilter)
  }

  fundFilter() {
    if (!this.state.funds) return null
    if (this.props.location.state) {
      const filtered = this.state.funds.filter(fund => fund.region.region.toLowerCase() === this.props.location.state.from)
      this.props.location.state = ''
      return this.setState({ filteredList: filtered })
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
    return this.setState({ filteredList: filteredFunds })
  }

  render() {
    if (!this.state.funds) return null
    return (
      <>
        <div className="columns">
          <div className="column col-12 alignRight">
            <Link to="/map">
              <button className="btn btn-sm btn-primary vincoButton marginRight">back to map</button>
            </Link>
          </div>
        </div>
        <div className="column col-12 centre">
          <input className="searchBar"
            placeholder="search by fund name"
            onChange={this.handleChange}
            name="search"
          />
        </div>
        <br/>
        <div className="centre">
          <div className="columns">
            <FundFilter
              handleRegion={this.handleRegion}
              handleHouse={this.handleHouse}
              handleStructure={this.handleStructure}
              handleStyles={this.handleStyles}
            />
          </div>
        </div>
        <section className="container">
          <div className="columns">
            {this.state.filteredList.length === 0
              ?
              <div className="column col-12 centre">
                <h3>no funds availiable with that criteria</h3>
                <h4>please revise your search</h4>
              </div>
              :
          <>
              <div className="column col-12 fundContainer">
                {this.state.filteredList.map(fund => {
                  // console.log(fund)
                  return <FundCard key={fund.id} {...fund} />
                })}
              </div>
          </> 
            }
          </div>
        </section>
      </>
    )
  }
}

export default FundIndex


