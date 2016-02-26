import React from 'react-native';
const {
  Dimensions,
  StyleSheet,
  View,
  Text
} = React;

import MapView from 'react-native-maps';
import StartPin from './StartPin';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const MapBlock = React.createClass({
  getInitialState () {
    return {
      region: {},
      startMarker: {},
      markers: []
    };
  },

  componentDidMount() {
    this.loadInitialPosition();
  },

  loadInitialPosition() {
    // https://github.com/facebook/react-native/commit/13f2aea85f8db9eec3bd42b66f9dc868e0d5a24e
    navigator.geolocation.getCurrentPosition(
      (pos) => this.setInitialPosition(pos),
      (error) => console.error(error)
    );
  },

  setInitialPosition(position) {
    let coords = position.coords;
    this.setState({
      region: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      startMarker: {
        latitude: coords.latitude,
        longitude: coords.longitude
      },
    });
  },

  render() {
    if( typeof(this.state.region.latitude) === 'undefined' ) {
      //fallback to using ip and show google address bar
      return null;
    }

    return (
      <MapView
       ref="map"
       style={styles.map}
       region={this.state.region}
       onRegionChange={(region) => this.setState({ region })}
      >
        <MapView.Marker draggable ref="m1"
          onDragStop={(e) => this.setState({ startMarker: e.nativeEvent.coordinate })}
          onDragStart={(e) => this.refs.m1.showCallout()}
          coordinate={this.state.startMarker}
        >
          <MapView.Callout>
            <View>
                <Text>Your car is 3s away</Text>
              </View>
          </MapView.Callout>
        </MapView.Marker>
      </MapView>
    );
  },
});

var styles = StyleSheet.create({
 map: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
 }
});


export default MapBlock;