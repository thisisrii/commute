/*global google
import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class GoogleMap extends Component {

    constructor(props) {
      super();
      const googleMapsClient = require('@google/maps').createClient({
        key: 'AIzaSyDIov3NpdoyD9mnEUydLyQP7G_Je64EvlI'
      });

      this.state = {
        map: googleMapsClient
      }
    }

    componentDidMount() {
      let latitude = parseFloat(this.props.lat);
      let longitude = parseFloat(this.props.long);
      let { map } = this.state;
      map.reverseGeocode({
        latlng: [-33.8571965, 151.2151398],
      })
    }

  render() {
    return <div id='map' />;
  }
}

export default GoogleMap;
*/
