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
    axios.get(`/api/funds/${fundId}/`)
      // .then(res => console.log(res))
      .then(res => this.setState({ fund: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.fund) return null
    const { fund } = this.state
    return (
      <section className="container">
        <div className="columns">
          <img className="column col-12 coverImage" src={fund.image} alt={fund.name}/>
          <h2 className="column col-6">{fund.name}</h2>
          <div className="column col-6 alignRight spaceBetween">
            <br/>
            <Link to={{ pathname: '/trade', state: { fund } }}>
              <button className="btn btn-sm btn-success">trade this fund</button>
            </Link>
            <Link to={{ pathname: '/dashboard', state: { from: fund } }}>
              <button className="btn btn-sm btn-primary">follow this fund</button>
            </Link>
            <button className="btn btn-sm" onClick={() => this.props.history.goBack()}>
              back to funds
            </button>
          </div>
          <div className="column col-6">
            <h4 className="borderBottom">HOW</h4>
            <div className="smallHeading">Investment style:
              {fund.styles.map(style => (
                <li key={style.name}>{style.name}</li>
              ))}
            </div>
            <br/>
            <div className="smallHeading">Sustainability rating: <span>{fund.sustainability_rating}</span></div>
            <br/>
            <h6 className="mediumHeading">Philiosophy and Process:</h6>
            <p>{fund.p_and_p}</p>
            <div className="smallHeading">Inception date: <span>{fund.inception_date}</span></div>
            <div className="smallHeading">Fund structure: <span>{fund.structure.vehicle}</span></div>
            <br/>
          </div>
          <div className="column col-6">
            <h4 className="borderBottom">HOW MUCH</h4>
            <div className="smallHeading">Fee: {fund.fee * 100}%</div>
            <br />
            <div className="toCome">GRAPHS COMING (fund, index, house price data, savings rate)</div>
            {/* <br />
            <h6>Performance (pa after fees):</h6>
            <li>2018: {fund.y_2018 * 100}%</li>
            <li>2017: {fund.y_2017 * 100}%</li>
            <li>2016: {fund.y_2016 * 100}%</li>
            <li>2015: {fund.y_2015 * 100}%</li>
            <li>2014: {fund.y_2014 * 100}%</li>
            <li>2013: {fund.y_2013 * 100}%</li>
            <li>2012: {fund.y_2012 * 100}%</li>
            <li>2011: {fund.y_2011 * 100}%</li>
            <li>2010: {fund.y_2010 * 100}%</li>
            <li>2009: {fund.y_2009 * 100}%</li> */}
          </div>
          <div className="column col-6">
            <h4 className="borderBottom">WHO</h4>
            <div>{fund.house}</div>
            <br/>
            <div className="smallHeading">Diversity rating: <span>{fund.diversity_rating}</span></div>
            <div className="smallHeading">Alignment rating: <span>{fund.alignment_rating}</span></div>
            <br/>
            <h6 className="mediumHeading">The people:</h6>
            <div>{fund.people}</div>
          </div>
          <div className="column col-6">
            <div>
              <h4 className="borderBottom">WHAT</h4>
              <div className="centre">
                <div>
                  <h6 className="mediumHeading">Top 10 stocks</h6>
                  <div>1 - {fund.stock_1}</div>
                  <div>2 - {fund.stock_2}</div>
                  <div>3 - {fund.stock_3}</div>
                  <div>4 - {fund.stock_4}</div>
                  <div>5 - {fund.stock_5}</div>
                  <div>6 - {fund.stock_6}</div>
                  <div>7 - {fund.stock_7}</div>
                  <div>8 - {fund.stock_8}</div>
                  <div>9 - {fund.stock_9}</div>
                  <div>10 - {fund.stock_10}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  }
}

export default FundShow