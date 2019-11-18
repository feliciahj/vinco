import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps'
import mapData from './mapData.json'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Render app with demo chart
class GlobalMap extends React.Component {
  constructor() {
    super()

    this.state = {
      clickedRegion: '',
      currentLayer: '',
      regions: ''
    }

    this.regions = [
      ['sweden'],
      ['brazil', 'russia', 'india', 'china', 'mexico', 'indonesia', 'south korea', 'turkey', 'colombia', 'indonesia', 'vietnam', 'egypt', 'turkey', 'south africa'],
      ['argentina', 'Bahrain', 'Bangladesh', 'Burkina Faso', 'Benin', 'Croatia', 'Estonia', 'Guinea-Bissau', 'Ivory Coast', 'Jordan', 'Kenya', 'Kuwait', 'Lebanon', 'Lithuania', 'Kazakhstan', 'Mauritius', 'Mali', 'Morocco', 'Niger', 'Nigeria', 'Oman', 'Romania', 'Serbia', 'Senegal', 'Slovenia', 'Sri Lanka', 'Togo', 'Tunisia', 'Vietnam'],
      ['Austria', 'Belgium', 'Denmark', 'Finland', 'France', 'Germany', 'Ireland', 'Italy', 'Netherlands', 'Norway', 'Portugal', 'Spain', 'Sweden', 'Switzerland', 'UK']
    ]

    this.layerProps = {
      onClick: e => this.setState({ clickedRegion: e.target.attributes.name.value.toLowerCase() }),
      onMouseEnter: e => this.setState({ currentLayer: e.target.attributes.id.value })
    }

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.setState({ clickedRegion: '' })
  }

  getRegion() {
    const index = this.regions.findIndex(region => region.includes(this.state.currentLayer))
    return index === -1 ? [] : this.regions[index]
  }

  getClickedRegion() {
    const index = this.regions.findIndex(region => region.includes(this.state.clickedRegion))
    return index === -1 ? [] : this.regions[index]
  }

  componentDidMount() {
    axios.get('/api/regions')
      .then(res => this.setState({ regions: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { clickedRegion } = this.state
    return (
      <>
      <div>
        <div className={`modal ${this.state.clickedRegion ? 'active' : ''}`} id="modal-id">
          <a href="#close" className="modal-overlay" aria-label="Close" onClick={this.closeModal}></a>
          <div className="modal-container">
            <div className="modal-header">
              <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={this.closeModal}></a>
              <div className="modal-title h5">{this.state.clickedRegion}</div>
            </div>
            <div className="modal-body">
              <div className="content">
                {this.state.regions.description} description will go here once I have figured out how to pass the props down. 
                {this.getClickedRegion().map(region => <p key={region}>{region}</p>)}
              </div>
            </div>
            <div className="modal-footer">
              <Link to={{ pathname: '/funds', state: { from: clickedRegion } }}>
                <button className="btn">Take me to the {clickedRegion} funds</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="map">
          <VectorMap {...mapData} layerProps={this.layerProps} currentLayers={this.getRegion()}/>     
        </div>
      </div>
  </>
    )
  }
}

export default GlobalMap







