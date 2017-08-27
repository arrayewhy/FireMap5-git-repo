import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class PlacesFaridSafi extends React.Component {
	render () {
		return (
			<GooglePlacesAutocomplete
				placeholder='Search'
				minLength={3}
				autoFocus={false}
				listViewDisplayed='auto'
				enablePoweredByContainer = { false }
				fetchDetails
				renderDescription={(row) => row.terms[0].value}
					onPress={(data, details = null) => {
						console.log(data);
						console.log(details);
				}}
				getDefaultValue={() => {
					return '';
				}}
				query={{
					key: 'AIzaSyD3bLZOXZEJoML3afsmcR0jkGTytBd59GA',
					language: 'en',
				}}
				styles={{
					description: {
						fontWeight: 'bold',
					},
					predefinedPlacesDescription: {
						color: '#1faadb',
					}
				}}
				nearbyPlacesAPI='GooglePlacesSearch'
				GoogleReverseGeocodingQuery={{
				}}
				GooglePlacesSearchQuery={{
					rankby: 'distance',
					types: 'address',
				}}
				filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
			/>
		);
	}
}
	