import React from 'react'
import { Link } from 'react-router-dom'

const FundCard = ({ image, name, house, structure, region, styles, id }) => (
  <div className="card">
    <div className="card-image centre">
      <img className="image img-responsive" src={image} alt={name}/>
    </div>
    <div className="card-header">
      <div className="card-title h4 tanzanite centre">{name}</div>
      <div className="card-subtitle grey centre">{house}</div>
      <br />
      <div className="card-subtitle midnightblue">Regional focus: {region.region}</div>
      <div className="text-gray">Fund structure: {structure.vehicle}</div>
    </div>
    <div className="card-body">
      <div className="text investmentStyle">Investment style:</div>
      <div>
        {styles.map(style => (
          <li key={style.name}>{style.name}</li>
        ))}
      </div>
    </div>
    <div className="centre">
      <Link to={`/funds/${id}`}>
        <button className="btn btn-primary btn-sm">More info</button>
      </Link>
    </div>
  </div>
)

export default FundCard