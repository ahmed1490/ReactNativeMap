import React from 'react-native';

const {
  View,
  StyleSheet,
  Text,
  PixelRatio,
  Animated
} = React;

import Modal from '../libs/react-native-modalbox';

// import GeoInfo from '../components/map/GeoInfo';
import MapBlock from '../map/MapBlock';
import MyLocationBtn from '../map/MyLocationBtn';
import ActionCard from '../actionCard/ActionCard';
import PlacesCard from '../PlacesCard';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {

  state = { 
    isPlacesCardOpen: false,
    isMapRegionChanging: false,
    cardPartialHide: new Animated.Value(1)
  };

  render() {
    // console.log('Home', this.props)
    return (
      <View style={styles.container}>
        <MapBlock
          {...this.props.location}
          actions={this.props.actions}
          _onMapRegionChange={this._setMapRegionChanging.bind(this)} />

        <MyLocationBtn />

        <ActionCard
          actions={this.props.actions}
          position={this.props.location.isRegionUpdating}
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
    // console.log('isMoving', isMoving)
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
