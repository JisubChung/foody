import React from 'react'
import './Thing.scss';

class Thing extends React.Component {
  state = { zoom: 10 };

  static propTypes() {
  	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  }

	render() {
    return (<div className="GMap">
      <div className='UpdatedText'>
				{this.props.google}
        <p>Current Zoom: { this.state.zoom }</p>
      </div>
			<p>a{this.props.lat}a</p>
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>)
  }

  componentDidMount() {
    // create the map, marker and infoWindow after the component has
    // been rendered because we need to manipulate the DOM for Google =(
    this.map = this.createMap()
    this.marker = this.createMarker()
    this.infoWindow = this.createInfoWindow()

    // have to define google maps event listeners here too
    // because we can't add listeners on the map until its created
    window.google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
  }

  // clean up event listeners when component unmounts
  componentDidUnMount() {
    window.google.maps.event.clearListeners(this.map, 'zoom_changed')
  }

  createMap() {
    let mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter()
    }
    return new window.google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {
    return new window.google.maps.LatLng(
			29.9717272,
			-90.1056957
    )
  }

  createMarker() {
    return new window.google.maps.Marker({
      position: this.mapCenter(),
      map: this.map
    })
	}

  createInfoWindow() {
    let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    return new window.google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    })
  }

  handleZoomChange() {
    this.setState({
      zoom: this.map.getZoom()
    })
  }
}

var initialCenter = { lng: -90.1056957, lat: 29.9717272 }

export default Thing;
