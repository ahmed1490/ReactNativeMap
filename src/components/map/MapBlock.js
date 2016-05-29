import React from 'react-native';
const {
  Dimensions,
  StyleSheet,
  View,
  Text,
  PropTypes
} = React;
// import PureRenderMixin from 'react-addons-pure-render-mixin';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import Pin from './Pin';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class MapBlock extends React.Component {

  static propTypes = {
    cars: PropTypes.array,
    startPosition: PropTypes.object,

    setStart: PropTypes.func
  };
  static defaultProps = {};
  state = {
    mapRegion: {}
  };

  componentWillMount() {
    const startPosition = this.props.startPosition;
    startPosition && startPosition.latitude ? this.setMapRegionToPosition(startPosition) : this.loadInitialPosition();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.startPosition.latitude !== this.props.startPosition.latitude) {
      this.setMapRegionToPosition(nextProps.startPosition);
    }
  }

  loadInitialPosition() {
    // https://github.com/facebook/react-native/commit/13f2aea85f8db9eec3bd42b66f9dc868e0d5a24e
    navigator.geolocation.getCurrentPosition(
      (pos) => this.props.setStart({latitude:pos.coords.latitude, longitude: pos.coords.longitude}),
      (error) => console.error(error)
    );
  }

  setMapRegionToPosition(coords) {
    this.setState({mapRegion: {
      ...coords,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }});
  }

  _onRegionChange(region) {
    this.setState({mapRegion: region});
  }

  _onRegionChangeComplete(region) {
    // console.log('CHANGE COMPLETE---', region)
    this.setState({mapRegion: region});
    this.props.setStart({latitude: region.latitude, longitude: region.longitude});
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
    const { mapRegion } = this.state;

    if( typeof(mapRegion.latitude) === 'undefined'
      // || typeof(position.latitude) === 'undefined'
      ) {
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