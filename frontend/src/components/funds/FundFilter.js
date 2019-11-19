import React from 'react'

const FundFilter = ({ handleRegion, handleHouse, handleStructure, handleStyles }) => (
  <form className="columns">
    <div className="column col-auto">
      <h6 className="vinco">Region</h6>
      <select name="region form-select dropdown" onChange={handleRegion}>
        <option value="All">All</option>
        <option value="Russia">Russia</option>
        <option value="Frontier Markets">Frontier Markets</option>
        <option value="Turkey">Turkey</option>
        <option value="Japan">Japan</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
        <option value="Global">Global</option>
      </select>
    </div>
    <div className="column col-auto">
      <h6 className="vinco">asset Manager</h6>
      <select name="house" onChange={handleHouse}>
        <option value="All">All</option>
        <option value="Franklin Templeton Investments">Franklin Templeton Investments</option>
        <option value="BlackRock">BlackRock</option>
        <option value="Legg Mason Global Asset Management">Legg Mason Global Asset Management</option>
        <option value="Man GLG">Man GLG</option>
        <option value="Baillie Gifford & Co">Baillie Gifford & Co</option>
        <option value="Sarasin & Partners">Sarasin & Partners</option>
        <option value="Schroders">Schroders</option>
        <option value="DWS Group">DWS Group</option>
      </select>
    </div>
    <div className="column col-auto">
      <h6 className="vinco">Fund structure</h6>
      <select name="structure" onChange={handleStructure}>
        <option value="All">All</option>
        <option value="Unit Trust">Unit Trust</option>
        <option value="ETF">ETF</option>
        <option value="SICAV">SICAV</option>
        <option value="Investment Trust">Investment Trust</option>
        <option value="OEIC">OEIC</option>
        <option value="ICVC">ICVC</option>
      </select>
    </div>
    <div className="column col-auto">
      <h6 className="vinco">Fund style</h6>
      <select name="styles" onChange={handleStyles}>
        <option value="All">All</option>
        <option value="Concentrated">	Concentrated</option>
        <option value="Food & agriculture">Food & agriculture</option>
        <option value="All-cap">All-cap</option>
        <option value="Large-cap">Large-cap</option>
        <option value="Small-cap">Small-cap</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Index">Index</option>
        <option value="ESG">ESG</option>
        <option value="Technology">Technology</option>
        <option value="Deep value">Deep value</option>
        <option value="Value">Value</option>
        <option value="Growth">Growth</option>
        <option value="Long-term">Long-term</option>
      </select>
    </div>

  </form>

)

export default FundFilter

