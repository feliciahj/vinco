import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps'
import mapData from './mapData.json'
import { Link } from 'react-router-dom'

// Render app with demo chart
class GlobalMap extends React.Component {
  constructor() {
    super()

    this.state = {
      clickedRegion: ''
    }

    this.layerProps = {
      onClick: e => this.setState({ clickedRegion: e.target.attributes.name.value })
    }

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.setState({ clickedRegion: '' })
  }

  render() {
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
                {this.state.clickedRegion} description will go here once updated in backend. 
              </div>
            </div>
            <div className="modal-footer">
              <Link to={'/funds/'}>
                <button className="btn">Take me to the {this.state.clickedRegion} funds</button>
              </Link>
            </div>
          </div>
        </div>
        <VectorMap {...mapData} layerProps={this.layerProps}/>
      </div>
  </>
    )
  }
}

export default GlobalMap









