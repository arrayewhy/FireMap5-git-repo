import React from 'react';
import { StyleSheet, View, Text, Button, } from 'react-native';
import MapView from 'react-native-maps';
import RNGooglePlaces from 'react-native-google-places';

export default class MapScreen extends React.Component {

	static navigationOptions = {
		title: 'Map Screen',
		header: null
	};

	state = {
		mapRegion: {
			latitude: 0,
			longitude: 0,
			latitudeDelta: 0.00922*1.5,
			longitudeDelta: 0.00421*1.5,
		},
		lastLat: null,
		lastLong: null,
		markerLat: 0,
		markerLong: 0,
	}

	componentDidMount() {
		this.watchID = navigator.geolocation.watchPosition((position) => {
		// Create the object to update this.state.mapRegion through the onRegionChange function
			let region = {
				latitude:       position.coords.latitude,
				longitude:      position.coords.longitude,
				latitudeDelta:  0.00922*1.5,
				longitudeDelta: 0.00421*1.5
			}
			this.onRegionChange(region, region.latitude, region.longitude);
		});
	}

	onRegionChange(region, lastLat, lastLong) {
		this.setState({
			mapRegion: region,
			// If there are no new values set the current ones
			lastLat: lastLat || this.state.lastLat,
			lastLong: lastLong || this.state.lastLong,
			markerLat: region.latitude,
			markerLong: region.longitude,
		});
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}

	openSearchModal() {
		RNGooglePlaces.openAutocompleteModal()
		.then((place) => {
			console.log(place);
			// place represents user's selection from the
			// suggestions and it is a simplified Google Place object.
		})
	.catch(error => console.log(error.message));  // error is a Javascript Error object
	}

	render () {

		var { params } = this.props.navigation.state;

		return (
			<View style = { styles.container }>
				<MapView
				style = { styles.mapContainer }
				region = {{
					latitude: params.latitude,
					longitude: params.longitude,
					latitudeDelta: this.state.mapRegion.latitudeDelta,
					longitudeDelta: this.state.mapRegion.longitudeDelta,
				}}>
						<MapView.Marker
						coordinate = {{
							latitude: params.latitude,
							longitude: params.longitude,
						}}
						onPress = { () => this.openSearchModal () }
						/>
				</MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1
	},
	mapContainer: {
		...StyleSheet.absoluteFillObject,
	},
})