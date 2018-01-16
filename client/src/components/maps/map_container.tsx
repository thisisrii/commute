import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      userLocation:this.props.currentUserLocation //function ot set state of index.js
    }
  }
  
  render() {
   // const userLocation = this.props.currentUserLocation;
    const style = {
      width: '100vw',
      height: '100vh'
    }
      return (
        <div style={style}>
        <Map google={this.props.google} zoom={14} onClick={this.onMapClick}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>No Name</h1>
              </div>
          </InfoWindow>
        </Map>
        </div>
      );
    }

   onMapClick=(e)=>{
     console.log(e);
     let lat = e.initialCenter.lat;
     let lng = e.initialCenter.lng;
     this.state.userLocation(lng,lat)
     console.log(`on click long${lng} lat ${lat}`)
     /*let geo = navigator.geolocation.getCurrentPosition(function(position) {
      console.log('current location')
      console.log('lat' + position.coords.latitude)  
      console.log('longs' + position.coords.longitude) 
    
    });
  */} 
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDIov3NpdoyD9mnEUydLyQP7G_Je64EvlI')
})(MapContainer)
