import React from 'react-native';

const {
  View,
  StyleSheet,
  Text,
  PixelRatio
} = React;

import Modal from 'react-native-modalbox';

// import GeoInfo from './components/map/GeoInfo';
import MapBlock from './components/map/MapBlock';
import ActionCard from './components/ActionCard';
import PlacesCard from './components/PlacesCard';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';


const App = React.createClass({

  getInitialState() {
    return {
      isPlacesCardOpen: false,
      isActionCardHidden: true
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <MapBlock />
        <Button containerStyle={styles.locationIcon}>
          <Icon name="navigate" size={18} color='#0092DA' style={{width:20, marginTop: 2}} />
        </Button>
        <ActionCard onPrimaryLocationClick={this.openPlacesCard} />
        <PlacesCard isCardOpen={this.state.isPlacesCardOpen} />
      </View>
    );
  },

  openPlacesCard() {
    this.setState({
      isPlacesCardOpen: true
    });
  }

});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

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

export default App;
