import React from 'react'
import { Link } from 'react-router-dom'

const FundCard = ({ name, house, structure, region, styles, id }) => (
  <div className="card centre">
    <div className="card-header">
      <div className="card-title h4">{name}</div>
      <div className="card-subtitle text-gray">{house}</div>
    </div>
    <div className="card-body">
      <div>{region.region}</div>
      <div>
        {styles.map(style => (
          <li key={style.name}>{style.name}</li>
        ))}
      </div>
      <div className="text-gray">{structure.vehicle}</div>
    </div>
    <Link to={`/funds/${id}`}>
      <button className="btn">More info</button>
    </Link>
  </div>
)

export default FundCard