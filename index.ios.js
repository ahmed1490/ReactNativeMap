import React, { AppRegistry } from 'react-native';
import App from './src/scenes/App';
// import App from './src/react-native-map/App';
import Reactotron from 'reactotron'


Reactotron.connect({enabled: __DEV__}); // connect with defaults, only for dev

AppRegistry.registerComponent('ReactNativeMap', () => App);
