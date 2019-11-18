import React from 'react'

const FundFilter = ({ handleRegion, handleHouse, handleStructure, handleStyles }) => (
  <form>
    <div>
      <h5>Region</h5>
      <select name="region" onChange={handleRegion}>
        <option value="All">All</option>
        <option value="Russia">Russia</option>
        <option value="Frontier Markets">Frontier Markets</option>
        <option value="Emerging Markets">Emerging Markets</option>
        <option value="Europe">Europe</option>
        <option value="Japan">Japan</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
        <option value="US">US</option>
      </select>
    </div>
    <div>
      <h5>Asset manager</h5>
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
    <div>
      <h5>Asset structure</h5>
      <select name="structure" onChange={handleStructure}>
        <option value="All">All</option>
        <option value="Unit Trust">Unit Trust</option>
        <option value="Other">Other</option>
        <option value="OTHER">OTHER</option>
        <option value="ETF">ETF</option>
        <option value="SICAV">SICAV</option>
        <option value="Investment Trust">Investment Trust</option>
        <option value="OEIC">OEIC</option>
      </select>
    </div>
    <div>
      <h5>Fund style</h5>
      <select name="styles" onChange={handleStyles}>
        <option value="All">All</option>
        <option value="	Concentrated">	Concentrated</option>
        <option value="Food & agriculture">Food & agriculture</option>
        <option value="All-cap">All-cap</option>
        <option value="Large-cap">Large-cap</option>
        <option value="Small-cap">Small-cap</option>
        <option value="OTHER">OTHER</option>
        <option value="Index">Index</option>
        <option value="ESG">ESG</option>
        <option value="Technology">Technology</option>
        <option value="Total return">Total return</option>
        <option value="Multi-asset">Multi-asset</option>
        <option value="Income">Income</option>
        <option value="Deep value">Deep value</option>
        <option value="Value">Value</option>
        <option value="Growth">Growth</option>
        <option value="Medium-term">Medium-term</option>
        <option value="Long-term">Long-term</option>
      </select>
    </div>

  </form>

)

export default FundFilter

