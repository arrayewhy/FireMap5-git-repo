import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

export default class PlacesTolu360 extends React.Component {
	openSearchModal() {
		RNGooglePlaces.openAutocompleteModal()
		.then((place) => { 
			console.log(place);         
			// place represents user's selection from the
			// suggestions and it is a simplified Google Place object.
		})
		.catch((error) => console.log(error));
	}

	render() {
		return (
			<View style = { styles.container }>
				<TouchableOpacity
					style={styles.button}
					onPress={() => this.openSearchModal()}>
						<Text>Pick a Place</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		padding: 10,
		backgroundColor: 'yellow',
	}
})
	