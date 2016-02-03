import React from 'react-native';
const {
  Dimensions,
  StyleSheet
} = React;
import MapView from 'react-native-maps';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapBlock = React.createClass({
  getInitialState: function() {
    return {
      region: {
        //default
      }
    };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
     (position) => this.setState({ region: this.getRegionFromPosition(position) }),
     (error) => console.error(error)
    );
  },

  getRegionFromPosition(position) {
    return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    };
  },

  onRegionChange(region) {
    this.setState({ region });
  },

  render: function() {
    if( typeof(this.state.region.latitude) === 'undefined' ) {
      //fallback to using ip and show google address bar
      return null;
    }

    return (
      <MapView
       ref="map"
       style={styles.map}
       region={this.state.region}
       onRegionChange={this.onRegionChange}
      >
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