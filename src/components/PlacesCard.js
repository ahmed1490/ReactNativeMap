import React from 'react-native';
import Modal from '../libs/react-native-modalbox';
const {
  Text,
  StyleSheet,
  View
} = React;

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const PlacesCard = React.createClass({

  getInitialState: function() {
    return {
      homePlace : {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }},
      workPlace : {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }}
    };
  },

  componentDidMount() {
    // setTimeout(() => this.refs.autocompleteModal.open(), 5700);
  },

  render: function() {
    return (
      <Modal style={[styles.modal, styles.autocomplete]}
        backdrop={true}
        isOpen={this.props.isCardOpen}
        position={"top"}
        ref={"autocompleteModal"}>

        <GooglePlacesAutocomplete
          placeholder='Search'
          minLength={2} // minimum length of text to search
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            console.log(data);
            console.log(details);
          }}
          getDefaultValue={() => {
            return ''; // text input default value
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyDcZ8pJTamDfX5ep8N2ctrXbKwGHcGle74',
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}
          styles={{
            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}

          currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={{
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }}
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            types: 'food',
          }}


          filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

          predefinedPlaces={[this.state.homePlace, this.state.workPlace]}

          predefinedPlacesAlwaysVisible={true}
        />
      </Modal>
    );
  },
});

const styles = StyleSheet.create({

  modal: {
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },

  autocomplete: {
    paddingTop: 30
  }
});

export default PlacesCard;