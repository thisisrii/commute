import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import DriverDetail from './components/driver_detail';
import DriverList from './components/driver_list';
import MapContainer from './components/maps/map_container';

export default class App extends Component {
  constructor(props){
    super();
    this.state = {
      drivers: [],
      selectedDriver: null,
      currentLocation: {
        lat: 18.42533,
        long: -33.91928
      }
    }

    this.currentUserLocation = this.currentUserLocation.bind(this);
  }

  currentUserLocation(userlong,userLat){
    this.setState({
      currentLocation: {
          lat: userLat,
          long: userlong
      }
    });
  }

  render() {
    return (
      <div id="driver-container">
      <div>{this.state.currentLocation.lat}</div>
      <div>{this.state.currentLocation.long}</div>
        <div className=".container">
          <div className="row">
            <div className="col-sm-9 col-md-6 col-lg-8">
              <MapContainer 
              currentLocation={this.state.currentLocation} 
              currentUserLocation={this.currentUserLocation}
              />
            </div>
          </div>
        </div>
        <DriverDetail driver = {this.state.selectedDriver}/>
        <DriverList
          onDriverSelect={selectedD=>this.setState({selectedDriver:selectedD})}
          drivers = {this.state.drivers}
        />
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var lng = this.refs.lng.value;
    var lat = this.refs.lat.value;
    var result;
    fetch('http://localhost:4000/api/drivers?lng=' + lng + '&lat=' + lat).then((data)=> {
    //fetch('http://localhost:4000/api/drivers').then((data)=>{
      return data.json();
    }).then( json => {
        this.setState({
          drivers: json,
        });
    });
  }
}

/*
          <form id="search" onSubmit={this.handleSubmit}>
          <label>Enter your Latitude:</label>
          <input type="text" ref="lat" placeholder="latitude" required />
          <label>Enter your Longitude:</label>
          <input type="text" ref="lng" placeholder="longitude" required />
          <input type="submit" value="Find Drivers" />
        </form>
*/

ReactDOM.render(<App />, document.querySelector('.drivers'));
