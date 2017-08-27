/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './src/components/MainScreen'; 
import MapScreen from './src/components/MapScreen';

const FireMap5 = StackNavigator ({
	First: {
		screen: MainScreen,
	},
	Second: {
		screen: MapScreen,
	},
});

AppRegistry.registerComponent('FireMap5', () => FireMap5);
