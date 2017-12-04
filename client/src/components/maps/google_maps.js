/*global google*/
import React, { Component } from "react";
//import { withScriptjs,withGoogleMap,GoogleMap,Marker } from 'react-google-maps';

class GoogleMap extends Component {

    componentDidMount() {
    const google = window.google;
    console.log(google);
    let latitude = parseFloat(this.props.lat);
    let longitude = parseFloat(this.props.long);
    // eslint-disable-next-line
   var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: {
        lat: latitude,
        lng: longitude
      }
    });
  }

  render() {
    return <div id='map' />;
  }
}

export default GoogleMap;

//18.42533
//-33.91928





//return <div className="map" id='map' ref="map" />;
/*
class Map extends Component{

    render(){

        const markers = this.props.markers || [];

        return(
            <div>
            <GoogleMap
            defaultZoom={3}
            defaultCenter={{lat:18.42533,lng:-33.91928}}>
            {markers.map((marker,index)=>(
                <Marker {...marker}/>
                )
            )}
            />
             </GoogleMap>
        </div>
        )
    }
}

 export default withGoogleMap(Map); //higher order function
*/







