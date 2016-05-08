import React from 'react-native';
const {
  View,
  Text,
  PropTypes,
  StyleSheet,
  PixelRatio,
  Dimensions,
} = React;
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import RNGeocoder from'react-native-geocoder';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MyLocationBtn extends React.Component {

  static propTypes = {
    setStart: PropTypes.func,
    setMapRegion: PropTypes.func,
  }

  _getCurrentLocation(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = position.coords;
        const location = {
          latitude: coords.latitude,
          longitude: coords.longitude,
        };

        this.props.setMapRegion({
          ...location,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        });

        this.props.setStart(location);
      },
      (error) => console.error(error)
    );
  }

  render() {
    return (
      <Button containerStyle={styles.locationIcon}
        onPress={this._getCurrentLocation.bind(this)}>
        <Icon name="navigate" size={18} color='#0092DA' style={{width:20, marginTop: 2}} />
      </Button>
    );
  }
};

const styles = StyleSheet.create({
  locationIcon: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#fff',
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#E9E9EA',
    bottom: 170,
    padding: 10
  }
});

export default MyLocationBtn;