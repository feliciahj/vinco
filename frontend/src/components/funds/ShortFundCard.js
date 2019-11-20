import React from 'react'

const ShortFundCard = ({ image, name, house, structure, region }) => (
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
  </div>
)

export default ShortFundCard