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
    const { actions, location, journey } = this.props;
    return (
      <View style={styles.container}>
        <MapBlock
          {...location}
          position={journey.position}

          setPosition={actions.journey.setPosition}
          setMapRegion={actions.location.setMapRegion}
          setRegionUpdating={actions.location.setRegionUpdating}
        />

        <MyLocationBtn
          setPosition={actions.journey.setPosition}
          setMapRegion={actions.location.setMapRegion}
        />

        <ActionCard
          isRegionUpdating={location.isRegionUpdating}
          journey={journey}

          setOptionsVisible={actions.journey.setOptionsVisible}
        />
        <PlacesCard
          isCardOpen={this.state.isPlacesCardOpen}
        />
      </View>
    );
  }

  _openPlacesCard() {
    this.setState({ isPlacesCardOpen: true });
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1
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
