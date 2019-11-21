import React from 'react'

const FundFilter = ({ focus, styles, house, structure, handleRegion, handleHouse, handleStructure, handleStyles }) => (
  <form className="columns">
    <div className="column col-auto">
      <h6 className="filterHeading">REGION</h6>
      <div name="region form-select dropdown" onClick={handleRegion}>
        <option className={focus === 'All' ? 'focus' : 'none'} value="All">All</option>
        <option className={focus === 'Russia' ? 'focus' : 'none'} value="Russia">Russia</option>
        <option className={focus === 'Frontier Markets' ? 'focus' : 'none'} value="Frontier Markets">Frontier Markets</option>
        <option className={focus === 'Turkey' ? 'focus' : 'none'} value="Turkey">Turkey</option>
        <option className={focus === 'Japan' ? 'focus' : 'none'} value="Japan">Japan</option>
        <option className={focus === 'India' ? 'focus' : 'none'} value="India">India</option>
        <option className={focus === 'UK' ? 'focus' : 'none'} value="UK">UK</option>
        <option className={focus === 'Global' ? 'focus' : 'none'} value="Global">Global</option>
      </div>
    </div>
    <div className="column col-house">
      <h6>ASSET MANAGER</h6>
      <div name="house" onClick={handleHouse}>
        <option className={house === 'All' ? 'house' : 'none'} value="All">All</option>
        <option className={house === 'Franklin Templeton Investments' ? 'house' : 'none'} value="Franklin Templeton Investments">Franklin Templeton Investments</option>
        <option className={house === 'BlackRock' ? 'house' : 'none'} value="BlackRock">BlackRock</option>
        <option className={house === 'Legg Mason Global Asset Management' ? 'house' : 'none'} value="Legg Mason Global Asset Management">Legg Mason Global Asset Management</option>
        <option className={house === 'Man GLG' ? 'house' : 'none'} value="Man GLG">Man GLG</option>
        <option className={house === 'Baillie Gifford & Co' ? 'house' : 'none'} value="Baillie Gifford & Co">Baillie Gifford & Co</option>
        <option className={house === 'Sarasin & Partners' ? 'house' : 'none'} value="Sarasin & Partners">Sarasin & Partners</option>
        <option className={house === 'Schroders' ? 'house' : 'none'} value="Schroders">Schroders</option>
        <option className={house === 'DWS Group' ? 'house' : 'none'} value="DWS Group">DWS Group</option>
      </div>
    </div>
    <div className="column col-auto">
      <h6>STRUCTURE</h6>
      <div name="structure" onClick={handleStructure}>
        <option className={structure === 'All' ? 'structure' : 'none'} value="All">All</option>
        <option className={structure === 'Unit Trust' ? 'structure' : 'none'} value="Unit Trust">Unit Trust</option>
        <option className={structure === 'ETF' ? 'structure' : 'none'} value="ETF">ETF</option>
        <option className={structure === 'SICAV' ? 'structure' : 'none'} value="SICAV">SICAV</option>
        <option className={structure === 'Investment Trust' ? 'structure' : 'none'} value="Investment Trust">Investment Trust</option>
        <option className={structure === 'OEIC' ? 'structure' : 'none'} value="OEIC">OEIC</option>
        <option className={structure === 'ICVC' ? 'structure' : 'none'} value="ICVC">ICVC</option>
      </div>
    </div>
    <div className="column col-auto">
      <h6>FUND STYLE</h6>
      <div name="styles" onClick={handleStyles}>
        <option className={styles === 'All' ? 'styles' : 'none'} value="All">All</option>
        <option className={styles === 'Concentrated' ? 'styles' : 'none'} value="Concentrated">	Concentrated</option>
        <option className={styles === 'All-cap' ? 'styles' : 'none'} value="All-cap">All-cap</option>
        <option className={styles === 'Large-cap' ? 'styles' : 'none'} value="Large-cap">Large-cap</option>
        <option className={styles === 'Small-cap' ? 'styles' : 'none'} value="Small-cap">Small-cap</option>
        <option className={styles === 'Healthcare' ? 'styles' : 'none'} value="Healthcare">Healthcare</option>
        <option className={styles === 'Index' ? 'styles' : 'none'} value="Index">Index</option>
        <option className={styles === 'ESG' ? 'styles' : 'none'} value="ESG">ESG</option>
        <option className={styles === 'Technology' ? 'styles' : 'none'} value="Technology">Technology</option>
        <option className={styles === 'Deep value' ? 'styles' : 'none'} value="Deep value">Deep value</option>
        <option className={styles === 'Value' ? 'styles' : 'none'} value="Value">Value</option>
        <option className={styles === 'Growth' ? 'styles' : 'none'} value="Growth">Growth</option>
        <option className={styles === 'Long-term' ? 'styles' : 'none'} value="Long-term">Long-term</option>
      </div>
    </div>
  </form>

)

export default FundFilter
