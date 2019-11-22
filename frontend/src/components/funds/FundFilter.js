import React from 'react'

const FundFilter = ({ focus, styles, house, structure, handleRegion, handleHouse, handleStructure, handleStyles }) => (
  <form className="columns">
    <div className="column col-auto">
      <h6 className="filterHeading">REGION</h6>
      <div name="region form-select dropdown wrap" onClick={handleRegion}>
        <div className="centre"><option className={focus === 'All' ? 'focus' : 'none'} value="All">All</option></div>
        <div className="centre"><option className={focus === 'Russia' ? 'focus' : 'none'} value="Russia">Russia</option></div>
        <div className="centre"><option className={focus === 'Frontier Markets' ? 'focus' : 'none'} value="Frontier Markets">Frontier Markets</option></div>
        <div className="centre"><option className={focus === 'Turkey' ? 'focus' : 'none'} value="Turkey">Turkey</option></div>
        <div className="centre"><option className={focus === 'Japan' ? 'focus' : 'none'} value="Japan">Japan</option></div>
        <div className="centre"><option className={focus === 'India' ? 'focus' : 'none'} value="India">India</option></div>
        <div className="centre"><option className={focus === 'UK' ? 'focus' : 'none'} value="UK">UK</option></div>
        <div className="centre"><option className={focus === 'Global' ? 'focus' : 'none'} value="Global">Global</option></div>
      </div>
    </div>
    <div className="column col-auto">
      <h6 className="filterHeading">ASSET MANAGER</h6>
      <div name="house" onClick={handleHouse}>
        <div className="centre"><option className={house === 'All' ? 'house' : 'none'} value="All">All</option></div>
        <div className="centre"><option className={house === 'Franklin Templeton Investments' ? 'house' : 'none'} value="Franklin Templeton Investments">Franklin Templeton Investments</option></div>
        <div className="centre"><option className={house === 'BlackRock' ? 'house' : 'none'} value="BlackRock">BlackRock</option></div>
        <div className="centre"><option className={house === 'Legg Mason Global Asset Management' ? 'house' : 'none'} value="Legg Mason Global Asset Management">Legg Mason Global Asset Management</option></div>
        <div className="centre"><option className={house === 'Man GLG' ? 'house' : 'none'} value="Man GLG">Man GLG</option></div>
        <div className="centre"><option className={house === 'Baillie Gifford & Co' ? 'house' : 'none'} value="Baillie Gifford & Co">Baillie Gifford & Co</option></div>
        <div className="centre"><option className={house === 'Sarasin & Partners' ? 'house' : 'none'} value="Sarasin & Partners">Sarasin & Partners</option></div>
        <div className="centre"><option className={house === 'Schroders' ? 'house' : 'none'} value="Schroders">Schroders</option></div>
        <div className="centre"><option className={house === 'DWS Group' ? 'house' : 'none'} value="DWS Group">DWS Group</option></div>
      </div>
    </div>
    <div className="column col-auto">
      <h6 className="filterHeading">STRUCTURE</h6>
      <div name="structure" onClick={handleStructure}>
        <div className="centre"> <option className={structure === 'All' ? 'structure' : 'none'} value="All">All</option></div>
        <div className="centre"><option className={structure === 'Unit Trust' ? 'structure' : 'none'} value="Unit Trust">Unit Trust</option></div>
        <div className="centre"><option className={structure === 'ETF' ? 'structure' : 'none'} value="ETF">ETF</option></div>
        <div className="centre"><option className={structure === 'SICAV' ? 'structure' : 'none'} value="SICAV">SICAV</option></div>
        <div className="centre"><option className={structure === 'Investment Trust' ? 'structure' : 'none'} value="Investment Trust">Investment Trust</option></div>
        <div className="centre"><option className={structure === 'OEIC' ? 'structure' : 'none'} value="OEIC">OEIC</option></div>
        <div className="centre"><option className={structure === 'ICVC' ? 'structure' : 'none'} value="ICVC">ICVC</option></div>
      </div>
    </div>
    <div className="column col-auto">
      <h6 className="filterHeading">FUND STYLE</h6>
      <div name="styles" onClick={handleStyles}>
        <div className="centre"><option className={styles === 'All' ? 'styles' : 'none'} value="All">All</option></div>
        <div className="centre"><option className={styles === 'Concentrated' ? 'styles' : 'none'} value="Concentrated">	Concentrated</option></div>
        <div className="centre"><option className={styles === 'All-cap' ? 'styles' : 'none'} value="All-cap">All-cap</option></div>
        <div className="centre"><option className={styles === 'Large-cap' ? 'styles' : 'none'} value="Large-cap">Large-cap</option></div>
        <div className="centre"><option className={styles === 'Small-cap' ? 'styles' : 'none'} value="Small-cap">Small-cap</option></div>
        <div className="centre"><option className={styles === 'Healthcare' ? 'styles' : 'none'} value="Healthcare">Healthcare</option></div>
        <div className="centre"><option className={styles === 'Index' ? 'styles' : 'none'} value="Index">Index</option></div>
        <div className="centre"><option className={styles === 'ESG' ? 'styles' : 'none'} value="ESG">ESG</option></div>
        <div className="centre"><option className={styles === 'Technology' ? 'styles' : 'none'} value="Technology">Technology</option></div>
        <div className="centre"><option className={styles === 'Deep value' ? 'styles' : 'none'} value="Deep value">Deep value</option></div>
        <div className="centre"><option className={styles === 'Value' ? 'styles' : 'none'} value="Value">Value</option></div>
        <div className="centre"><option className={styles === 'Growth' ? 'styles' : 'none'} value="Growth">Growth</option></div>
        <div className="centre"><option className={styles === 'Long-term' ? 'styles' : 'none'} value="Long-term">Long-term</option></div>
      </div>
    </div>
  </form>

)

export default FundFilter
