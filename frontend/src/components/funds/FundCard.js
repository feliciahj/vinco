import React from 'react'
import { Link } from 'react-router-dom'

const FundCard = ({ image, name, region, styles, id }) => (
  <Link style={{ textDecoration: 'none' }} to={`/funds/${id}`}>
    <div className="card">
      <div className="card-image centre">
        <img className="image img-responsive" src={image} alt={name}/>
      </div>
      <div className="card-header">
        <div className="card-title h4 tanzanite centre">{name}</div>
        <div className="card-subtitle text-gray centre">Regional focus: {region.region}</div>
      </div>
      <div className="card-body centre">
        <div className="text investmentStyle">Investment style:</div>
        <div>
          {styles.map(style => (
            <li key={style.name}>{style.name}</li>
          ))}
        </div>
      </div>
    </div>
  </Link>
)

export default FundCard