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
      regions: null
    }

    this.regions = [
      ['russia'],
      ['turkey'],
      ['kyushu', 'shikoku', 'honshu', 'hokkaido'],
      ['india'],
      ['britain', 'ulster'],
      ['argentina', 'senegal', 'ivory coast','burkina fas', 'croatia', 'estonia', 'lithuania', 'kazakhstan', 'romania', 'serbia', 'slovenia', 'kenya', 'mauritius', 'morocco', 'nigeria', 'tunisia', 'bahrain', 'jordan', 'kuwait', 'lebanon', 'oman', 'bangladesh', 'sri lanka', 'vietnam'],
      ['usa', 'sweden', 'norway', 'finland', 'denmark','china', 'australia', 'canada', 'israel', 'germany', 'france', 'ttaly', 'spain', 'singapore', 'south korea', 'taiwan']
    ]

    this.layerProps = {
      onClick: e => this.setState({ clickedRegion: this.isItRegion(e.target.attributes.name.value) }),
      onMouseEnter: e => this.setState({ currentLayer: e.target.attributes.id.value })
    }

    this.closeModal = this.closeModal.bind(this)
  }

  isItRegion(countryClicked) {
    if (['kyushu', 'shikoku', 'honshu', 'hokkaido'].includes(countryClicked.toLowerCase())) return 'japan'
    if (['britain', 'ulster'].includes(countryClicked.toLowerCase())) return 'uk'
    if (['argentina', 'senegal', 'ivory coast','burkina fas', 'croatia', 'estonia', 'lithuania', 'kazakhstan', 'romania', 'serbia', 'slovenia', 'kenya', 'mauritius', 'morocco', 'nigeria', 'tunisia', 'bahrain', 'jordan', 'kuwait', 'lebanon', 'oman', 'bangladesh', 'sri lanka', 'vietnam'].includes(countryClicked.toLowerCase())) return 'frontier markets'
    if (['usa', 'sweden', 'norway', 'finland', 'denmark', 'china', 'australia', 'canada', 'israel', 'germany', 'france', 'ttaly', 'spain', 'singapore', 'south korea', 'taiwan'].includes(countryClicked.toLowerCase())) return 'global'
    if (['russia'].includes(countryClicked.toLowerCase())) return 'russia'
    if (['turkey'].includes(countryClicked.toLowerCase())) return 'turkey'
    if (['india'].includes(countryClicked.toLowerCase())) return 'india'
    return countryClicked
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
    if (!this.state.regions) return null
    const { clickedRegion, regions } = this.state
    return (
      <>
        <div>
          <div className={`modal ${this.state.clickedRegion ? 'active' : ''}`} id="modal-id">
            <a href="#close" className="modal-overlay" aria-label="Close" onClick={this.closeModal}></a>
            <div className="modal-container">
              <div className="modal-header">
                <a href="#close" className="btn btn-clear float-right" aria-label="Close" onClick={this.closeModal}></a>
                <div className="modal-title h5">{this.state.clickedRegion.toUpperCase()}</div>
              </div>
              <div className="modal-body">
                <div className="content">
                  {regions
                    .filter(reg => reg.region.toLowerCase() === clickedRegion)
                    .map(region => <p key={region.id}>{region.description}</p>)}
                </div>
              </div>
              <div className="modal-footer">
                <Link to={{ pathname: '/funds', state: { from: clickedRegion } }}>
                  <button className="btn">Take me to the {clickedRegion.toUpperCase()} funds</button>
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






