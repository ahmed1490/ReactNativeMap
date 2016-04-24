import React from 'react-native';
const {
  Dimensions,
  StyleSheet,
  View,
  Text,
  PropTypes
} = React;
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import Pin from './Pin';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class MapBlock extends React.Component {

  static propTypes = {
    mapRegion: PropTypes.object,
    isRegionUpdating: PropTypes.bool,
    cars: PropTypes.array,
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
    this.props.setPosition({latitude: region.latitude, longitude: region.longitude});
    this.props.setRegionUpdating(false);
  }

  renderMarker() {
    const { position } = this.props;
    return(
      <MapView.Marker ref="m1"
        style={{}}
        pinColor={'green'}
        coordinate={{...position}}
      />
    );
  }

  render() {
    const { mapRegion, position } = this.props;

    if( typeof(mapRegion.latitude) === 'undefined' ||
      typeof(position.latitude) === 'undefined' ) {
      //fallback to using ip and show google address bar
      return null;
    }

    return (
      <View style={styles.map}>
        <MapView
          showsCompass={true}
          showsScale={true}
          // showsUserLocation={true}
          ref="map"
          style={styles.map}
          region={mapRegion}

          onRegionChange={this._onRegionChange.bind(this)}
          onRegionChangeComplete={this._onRegionChangeComplete.bind(this)}
        >
          {/*this.renderMarker()*/}
          {this.props.cars.map(car => (
            <MapView.Marker.Animated key={car.id}
              coordinate={{latitude: car.latitude, longitude: car.longitude}}
              title={car.duration}
            >
              <Icon name="android-car" size={24} style={{}} />
            </MapView.Marker.Animated>
          ))}
        </MapView>

      <Pin />
      </View>
    );
  }
};

var styles = StyleSheet.create({
 map: {
  flex: 1
 }
});


export default MapBlock;