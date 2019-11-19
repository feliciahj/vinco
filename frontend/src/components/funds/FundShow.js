import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class FundShow extends React.Component {
  constructor() {
    super()

    this.state = {
      fund: null
    }
  }

  componentDidMount() {
    const fundId = this.props.match.params.id
    axios.get(`/api/funds/${fundId}`)
      .then(res => this.setState({ fund: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.fund) return null
    const { fund } = this.state
    return (
      <section className="container">
        <div className="columns">
          <div className="column col-12">MAP OF FUND FOCUS</div>
          <h2 className="column col-6">{fund.name}</h2>
          <div className="column col-6">
            <Link to={{ pathname: '/trade', state: { fund } }}>
              <button className="btn btn-lg btn-success">Trade this fund</button>
            </Link>
            <Link to={{ pathname: '/dashboard', state: { from: fund } }}>
              <button className="btn btn-lg">Follow this fund</button>
            </Link>
          </div>
          <div className="column col-6">
            <h3>HOW</h3>
            <div>Inception date: {fund.inception_date}</div>
            <div>Fund structure: {fund.structure.vehicle}</div>
            {/* <div>Region info: {fund.region.description})</div> */}
            <div>Investment style:
              {fund.styles.map(style => (
                <li key={style.name}>{style.name}</li>
              ))}
            </div>
            <div>Sustainability rating: {fund.sustainability_rating}</div>
            <h6>Philiosophy and Process:</h6>
            <p>{fund.p_and_p}</p>
            <div>
              <img src={fund.image} alt={fund.name}/>
            </div>
          </div>
          <div className="column col-6">
            <h3>HOW MUCH</h3>
            <div>Fee: {fund.fee * 100}%</div>
            <br />
            <div>GRAPH SHOWING THE BELOW DATA, index, house price data, savings rate</div>
            <br />
            <h6>Performance (pa after fees)</h6>
            <li>2018: {fund.y_2018 * 100}%</li>
            <li>2017: {fund.y_2017 * 100}%</li>
            <li>2016: {fund.y_2016 * 100}%</li>
            <li>2015: {fund.y_2015 * 100}%</li>
            <li>2014: {fund.y_2014 * 100}%</li>
            <li>2013: {fund.y_2013 * 100}%</li>
            <li>2012: {fund.y_2012 * 100}%</li>
            <li>2011: {fund.y_2011 * 100}%</li>
            <li>2010: {fund.y_2010 * 100}%</li>
            <li>2009: {fund.y_2009 * 100}%</li>
          </div>
          <div className="column col-6">
            <h3>WHO</h3>
            <div>{fund.house}</div>
            <div>{fund.diversity_rating}</div>
            <div>{fund.alignment_rating}</div>
            <div>{fund.people}</div>
          </div>
          <div className="column col-6">
            <h3>WHAT</h3>
            <h6>TOP 10 STOCKS</h6>
            <div>{fund.stock_1}</div>
            <div>{fund.stock_2}</div>
            <div>{fund.stock_3}</div>
            <div>{fund.stock_4}</div>
            <div>{fund.stock_5}</div>
            <div>{fund.stock_6}</div>
            <div>{fund.stock_7}</div>
            <div>{fund.stock_8}</div>
            <div>{fund.stock_9}</div>
            <div>{fund.stock_10}</div>
          </div>
        </div>
      </section >
    )
  }
}

export default FundShow