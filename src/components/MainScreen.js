import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class MainScreen extends React.Component {

	static navigationOptions = {
		title: 'Main Screen',
		header: null,
	};

	render () {

		var { navigate } = this.props.navigation;

		return (
			<View style = { styles.container }>
				<TouchableOpacity
				style = { styles.tasteButton }
				onPress = { () => navigate ('Second', { latitude: 1.518490, longitude: 110.365492 }) }>
					<Text style = { styles.tasteButtonText }>美味しの!</Text>
				</TouchableOpacity>

				<TouchableOpacity
				style = { styles.nearbyButton }
				onPress = { () => navigate ('Second', { latitude: 1.527341, longitude: 110.375907 }) }>
					<Text style = { styles.nearbyButtonText }>Dekat!</Text>
				</TouchableOpacity>

				<TouchableOpacity
				style = { styles.aircondButton }
				onPress = { () => navigate ('Second', { latitude: 1.527405, longitude: 110.369086 }) }>
					<Text style = { styles.aircondButtonText }>冷的!</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		...StyleSheet.absoluteFillObject,
		justifyContent: 'center',
		padding: 20,
	},
	tasteButton: {
		backgroundColor: 'red',
		margin: 5,
		padding: 10,
		borderRadius: 10 / 2,		
	},
	tasteButtonText: {
		color: 'white',
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center',
	},	
	nearbyButton: {
		backgroundColor: 'yellow',
		margin: 5,
		padding: 10,
		borderRadius: 10 / 2,		
	},
	nearbyButtonText: {
		color: 'black',
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	aircondButton: {
		backgroundColor: 'blue',
		margin: 5,
		padding: 10,
		borderRadius: 10 / 2,		
	},
	aircondButtonText: {
		color: 'white',
		fontSize: 48,
		fontWeight: 'bold',
		textAlign: 'center',
	},
})
	