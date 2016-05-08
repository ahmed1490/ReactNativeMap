import React from 'react-native';
import Modal from './libs/react-native-modalbox';
import Button from 'react-native-button';
const {
  Text,
  StyleSheet,
  View,
  Dimensions,
  PropTypes,
  DeviceEventEmitter
} = React;

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import dismissKeyboard from 'react-native-dismiss-keyboard';

class PlacesCard extends React.Component {

  state = {
    visibleHeight: Dimensions.get('window').height,
    homePlace : {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }},
    workPlace : {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }},
  };

  static propTypes = {
    locationSelection: React.PropTypes.oneOf(['start', 'end']),

    setLocationSelection: PropTypes.func,
    setStart: PropTypes.func,
    setEnd: PropTypes.func,
  }

  componentWillMount () {
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
  }

  keyboardWillShow (e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
  }

  keyboardWillHide (e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  }

  _addLocationData (locationDetails) {
    const placeData = {
      name: locationDetails.name,
      locality: locationDetails.vicinity
    };
    if(this.props.locationSelection === 'start') {
      this.props.setStart(locationDetails.geometry.location, placeData);
    }
    else if(this.props.locationSelection === 'end') {
      this.props.setEnd(locationDetails.geometry.location, placeData);
    }
  }

  _closeModal () {
    dismissKeyboard();
    this.props.setLocationSelection()
  }

  render() {
    // console.log('places--', this.props.isCardOpen)
    const isCardOpen = !!this.props.locationSelection;
    return (
      <Modal style={[styles.modal, {height: this.state.visibleHeight}]}
        backdrop={false}
        isOpen={false || isCardOpen}
        position={"top"}
        ref={"autocompleteModal"}
        onClosed={this._closeModal.bind(this)}>

        <View style={[styles.header]}>
          <Text>{this.props.locationSelection == 'start' ? 'Start' : 'Destination'} {this.state.visibleHeight}</Text>
        </View>

        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}

          fetchDetails={true}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            this._addLocationData({...data, ...details})
            console.log('data', data);
            console.log('details', details);
          }}
          getDefaultValue={() => {
            return ''; // text input default value
          }}

          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}

          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyDcZ8pJTamDfX5ep8N2ctrXbKwGHcGle74',
            language: 'en', // language of the results
            // types: '(cities)', // default: 'geocode'
          }}

          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          predefinedPlaces={[this.state.homePlace, this.state.workPlace]}
          predefinedPlacesAlwaysVisible={true}

          nearbyPlacesAPI='GoogleReverseGeocoding' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            //https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingRequests
              // componentRestrictions: {
              //   country: 'FF'
              // }
          }}

          filterReverseGeocodingByTypes={['sublocality','locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities          
        />

        <Button
          containerStyle={[styles.buttonPrimary, styles.vertical_center]}
          onPress={this._closeModal.bind(this)}
        >
          <Text style={[styles.buttonPrimary_text]}>Done</Text>
        </Button>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({

  modal: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },

  header: {
    backgroundColor: '#EFEFF4',
    padding: 10,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  vertical_center: { //vertical center the content inside
    flexDirection: 'column',
    justifyContent: 'center',
  },

  buttonPrimary: {
    height: 60,
    // backgroundColor: '#FFE550',
    borderWidth: 1,
    borderColor: '#EFEFF4',
  },

  buttonPrimary_text: {
    fontSize: 22,
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export default PlacesCard;