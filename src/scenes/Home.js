import React from 'react-native';

const {
  View,
  StyleSheet,
  Text,
  PixelRatio,
  Animated
} = React;

import Modal from '../components/libs/react-native-modalbox';

// import GeoInfo from '../components/map/GeoInfo';
import MapBlock from '../components/map/MapBlock';
import ActionCard from '../components/ActionCard';
import PlacesCard from '../components/PlacesCard';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {

  state = { 
    isPlacesCardOpen: false,
    isMapRegionChanging: false,
    cardPartialHide: new Animated.Value(1)
  };

  render() {
    console.log('Home')
    return (
      <View style={styles.container}>
        <MapBlock _onMapRegionChange={this._setMapRegionChanging.bind(this)} />

        <Button containerStyle={styles.locationIcon}>
          <Icon name="navigate" size={18} color='#0092DA' style={{width:20, marginTop: 2}} />
        </Button>

        <ActionCard
          cardPartialHide={this.state.cardPartialHide}
          onPrimaryLocationClick={this._openPlacesCard.bind(this)}
        />
        <PlacesCard
          isCardOpen={this.state.isPlacesCardOpen}
        />
      </View>
    );
  }

  _setMapRegionChanging(isMoving) {
    if( this.state.isMapRegionChanging === isMoving )
      return;

    this.setState({ isMapRegionChanging: isMoving });

    Animated.spring(
      this.state.cardPartialHide,
      {
        toValue: isMoving ? 0 : 1,
        friction: 7
      }
    ).start();
    console.log('isMoving', isMoving)
  }

  _openPlacesCard() {
    this.setState({ isPlacesCardOpen: true });
  }

};

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

export default Home;
