import React, { Component } from 'react';
//import Thing from './modules/Thing';
import {Map,  Marker} from 'google-maps-react'
import './Discover.scss';


class Discover extends Component {
	handleClick(e) {
		console.log(e);
  }
	render() {
		return (
			<div className="mapContainer">
        Discover
        <Map
					className="map"
					google={window.google}
					initialCenter={{lat: 37.759703, lng: -122.428093}}
					onDragend={this.handleClick}
					zoom={14}
					style={{width: '100%', height: '50vh', position: 'relative'}}>
          <Marker
           name={'Dolores park'}
           position={{lat: 37.759703, lng: -122.428093}} />
        </Map>
      </div>
		);
	}
}

export default Discover;
