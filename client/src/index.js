import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import DriverDetail from './components/driver_detail';
import DriverList from './components/driver_list';
//import Map from './components/maps/google_maps'
import GoogleMap from './components/maps/google_maps'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      drivers:[],
      selectedDriver:null,
      lat:'18.42533',
      long:'-33.91928'
    }

  }

  render() {
    return (
      <div id="driver-container">

      <form id="search" onSubmit={this.handleSubmit}>
          <label>Enter your Latitude:</label>
          <input type="text" ref="lat" placeholder="latitude" required />
          <label>Enter your Longitude:</label>
          <input type="text" ref="lng" placeholder="longitude" required />
          <input type="submit" value="Find Drivers" />
      </form>

      <GoogleMap lng={this.state.long} lat={this.state.lat}/>

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
    fetch('http://localhost:4000/api/drivers?lng=' + lng + '&lat=' + lat).then((data)=>{
    //fetch('http://localhost:4000/api/drivers').then((data)=>{
      return data.json();
    }).then( json => {
        this.setState({
          drivers: json,
        });
    });
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

// <GoogleMap lng={this.state.long} lat={this.state.lat}/>

    /* 
     <Map 
      containerElement={<div style={{height:100+'%'}}/>}
      mapElement={<div style={{height:100+'%'}}/>}
     />
*/