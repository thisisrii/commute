import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import DriverDetail from './components/driver_detail';
import DriverList from './components/driver_list';
import MapContainer from './components/maps/map_container';

export default class App extends Component {
	constructor(props){
		super(props);
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
			<body>
				<header>
					<span>Lattitude: {this.state.currentLocation.lat}</span>
					<span>Longitude: {this.state.currentLocation.long}</span>
				</header>
				<main>
					<section>
						<MapContainer currentLocation={this.state.currentLocation} currentUserLocation={this.currentUserLocation} />
						<DriverDetail driver = {this.state.selectedDriver}/>
					</section>
					<aside>
						<DriverList onDriverSelect={selectedD=>this.setState({selectedDriver:selectedD})} drivers = {this.state.drivers} />
					</aside>
				</main>
			</body>
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
