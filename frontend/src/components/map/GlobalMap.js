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

    this.layerProps = {
      onClick: e => this.setState({ clickedRegion: e.target.attributes.name.value }),
      onMouseEnter: e => this.setState({ currentLayer: e.target.attributes.id.value })
    }

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.setState({ clickedRegion: '' })
  }

  componentDidMount() {
    axios.get('/api/regions')
      .then(res => this.setState({ regions: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
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
                {this.state.clickedRegion} description will go here once I have figured out how to pass the props down. 
              </div>
            </div>
            <div className="modal-footer">
              <Link to={{ pathname: '/funds', state: { from: clickedRegion } }}>
                <button className="btn">Take me to the {clickedRegion} funds</button>
              </Link>
            </div>
          </div>
        </div>
        <VectorMap {...mapData} layerProps={this.layerProps} currentLayers={[this.state.currentLayer]}/>
      </div>
  </>
    )
  }
}

export default GlobalMap


// {[this.state.currentLayer]}






