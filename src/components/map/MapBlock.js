import React from 'react-native';
const {
  Dimensions,
  StyleSheet,
  View,
  Text,
  PropTypes
} = React;

import MapView from 'react-native-maps';
import StartPin from './StartPin';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.008;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class MapBlock extends React.Component {

  static propTypes = {
    mapRegion: PropTypes.object,
    isRegionUpdating: PropTypes.bool,
    position: PropTypes.object,

    setPosition: PropTypes.func,
    setMapRegion: PropTypes.func,
    setRegionUpdating: PropTypes.func
  };
  static defaultProps = {};
  state = {};

  componentDidMount() {
    this.loadInitialPosition();
  }

  loadInitialPosition() {
    // https://github.com/facebook/react-native/commit/13f2aea85f8db9eec3bd42b66f9dc868e0d5a24e
    navigator.geolocation.getCurrentPosition(
      (pos) => this.setInitialPosition(pos),
      (error) => console.error(error)
    );
  }

  setInitialPosition(position) {
    let coords = position.coords;
    
    this.props.setMapRegion({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    });

    this.props.setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  }

  _onRegionChange(region) {
    if( this.props.isRegionUpdating === false ) {
      this.props.setRegionUpdating(true);
    } 
  }

  _onRegionChangeComplete(region) {
    this.props.setMapRegion(region);
    this.props.setRegionUpdating(false);
  }

  render() {
    const { position, mapRegion } = this.props;

    if( typeof(mapRegion.latitude) === 'undefined' ||
      typeof(position.latitude) === 'undefined' ) {
      //fallback to using ip and show google address bar
      return null;
    }

    return (
      <MapView
        showsCompass={true}
        showsScale={true}
        showsUserLocation={true}
        ref="map"
        style={styles.map}
        region={mapRegion}

        onRegionChange={this._onRegionChange.bind(this)}
        onRegionChangeComplete={this._onRegionChangeComplete.bind(this)}
      >
        <MapView.Marker draggable ref="m1"
          onDragStop={(e) => this.setState({ startMarker: e.nativeEvent.coordinate })}
          onDragStart={(e) => this.refs.m1.showCallout()}
          coordinate={{...position}}
        >
          <MapView.Callout>
            <View>
                <Text>Your car is 3s away</Text>
              </View>
          </MapView.Callout>
        </MapView.Marker>
      </MapView>
    );
  }
};

var styles = StyleSheet.create({
 map: {
  // flex: 1
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
 }
});


export default MapBlock;