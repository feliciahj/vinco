import React from 'react'

const FundFilter = ({ focus, styles, house, structure, handleRegion, handleHouse, handleStructure, handleStyles }) => (
  <form className="columns">
    <div className="column col-auto">
      <h6 className="filterHeading">REGION</h6>
      <div name="region form-select dropdown wrap" onClick={handleRegion}>
        <div className="centre"><option className={focus === 'All' ? 'default' : 'none'} value="All">All</option></div>
        <div className="centre"><option className={focus === 'Russia' ? 'default' : 'none'} value="Russia">Russia</option></div>
        <div className="centre"><option className={focus === 'Frontier Markets' ? 'default' : 'none'} value="Frontier Markets">Frontier Markets</option></div>
        <div className="centre"><option className={focus === 'Turkey' ? 'default' : 'none'} value="Turkey">Turkey</option></div>
        <div className="centre"><option className={focus === 'Japan' ? 'default' : 'none'} value="Japan">Japan</option></div>
        <div className="centre"><option className={focus === 'India' ? 'default' : 'none'} value="India">India</option></div>
        <div className="centre"><option className={focus === 'UK' ? 'default' : 'none'} value="UK">UK</option></div>
        <div className="centre"><option className={focus === 'Global' ? 'default' : 'none'} value="Global">Global</option></div>
      </div>
    </div>
    <div className="column col-auto">
      <h6 className="filterHeading">ASSET MANAGER</h6>
      <div name="house" onClick={handleHouse}>
        <div className="centre"><option className={house === 'All' ? 'default' : 'none'} value="All">All</option></div>
        <div className="centre"><option className={house === 'Franklin Templeton Investments' ? 'default' : 'none'} value="Franklin Templeton Investments">Franklin Templeton Investments</option></div>
        <div className="centre"><option className={house === 'BlackRock' ? 'default' : 'none'} value="BlackRock">BlackRock</option></div>
        <div className="centre"><option className={house === 'Legg Mason Global Asset Management' ? 'default' : 'none'} value="Legg Mason Global Asset Management">Legg Mason Global Asset Management</option></div>
        <div className="centre"><option className={house === 'Man GLG' ? 'default' : 'none'} value="Man GLG">Man GLG</option></div>
        <div className="centre"><option className={house === 'Baillie Gifford & Co' ? 'default' : 'none'} value="Baillie Gifford & Co">Baillie Gifford & Co</option></div>
        <div className="centre"><option className={house === 'Sarasin & Partners' ? 'default' : 'none'} value="Sarasin & Partners">Sarasin & Partners</option></div>
        <div className="centre"><option className={house === 'Schroders' ? 'default' : 'none'} value="Schroders">Schroders</option></div>
        <div className="centre"><option className={house === 'DWS Group' ? 'default' : 'none'} value="DWS Group">DWS Group</option></div>
      </div>
    </div>
    <div className="column col-auto">
      <h6 className="filterHeading">STRUCTURE</h6>
      <div name="structure" onClick={handleStructure}>
        <div className="centre"> <option className={structure === 'All' ? 'default' : 'none'} value="All">All</option></div>
        <div className="centre"><option className={structure === 'Unit Trust' ? 'default' : 'none'} value="Unit Trust">Unit Trust</option></div>
        <div className="centre"><option className={structure === 'ETF' ? 'default' : 'none'} value="ETF">ETF</option></div>
        <div className="centre"><option className={structure === 'SICAV' ? 'default' : 'none'} value="SICAV">SICAV</option></div>
        <div className="centre"><option className={structure === 'Investment Trust' ? 'default' : 'none'} value="Investment Trust">Investment Trust</option></div>
        <div className="centre"><option className={structure === 'OEIC' ? 'default' : 'none'} value="OEIC">OEIC</option></div>
        <div className="centre"><option className={structure === 'ICVC' ? 'default' : 'none'} value="ICVC">ICVC</option></div>
      </div>
    </div>
    <div className="column col-auto">
      <h6 className="filterHeading">FUND STYLE</h6>
      <div name="styles" onClick={handleStyles}>
        <div className="centre"><option className={styles === 'All' ? 'default' : 'none'} value="All">All</option></div>
        <div className="centre"><option className={styles === 'Concentrated' ? 'default' : 'none'} value="Concentrated">	Concentrated</option></div>
        <div className="centre"><option className={styles === 'All-cap' ? 'default' : 'none'} value="All-cap">All-cap</option></div>
        <div className="centre"><option className={styles === 'Large-cap' ? 'default' : 'none'} value="Large-cap">Large-cap</option></div>
        <div className="centre"><option className={styles === 'Small-cap' ? 'default' : 'none'} value="Small-cap">Small-cap</option></div>
        <div className="centre"><option className={styles === 'Healthcare' ? 'default' : 'none'} value="Healthcare">Healthcare</option></div>
        <div className="centre"><option className={styles === 'Index' ? 'default' : 'none'} value="Index">Index</option></div>
        <div className="centre"><option className={styles === 'ESG' ? 'default' : 'none'} value="ESG">ESG</option></div>
        <div className="centre"><option className={styles === 'Technology' ? 'default' : 'none'} value="Technology">Technology</option></div>
        <div className="centre"><option className={styles === 'Deep value' ? 'default' : 'none'} value="Deep value">Deep value</option></div>
        <div className="centre"><option className={styles === 'Value' ? 'default' : 'none'} value="Value">Value</option></div>
        <div className="centre"><option className={styles === 'Growth' ? 'default' : 'none'} value="Growth">Growth</option></div>
        <div className="centre"><option className={styles === 'Long-term' ? 'default' : 'none'} value="Long-term">Long-term</option></div>
      </div>
    </div>
  </form>

)

export default FundFilter
