import React from 'react-native';

const {
  View,
  StyleSheet,
  Text,
  Button
} = React;

import Modal from 'react-native-modalbox';

// import GeoInfo from './components/map/GeoInfo';
import MapBlock from './components/map/MapBlock';
import ActionCard from './components/ActionCard';
import PlacesCard from './components/PlacesCard';

const App = React.createClass({

  getInitialState() {
    return {
      isPlacesCardOpen: false
    };
  },

  render() {
    return (
      <View style={styles.container}>
        <MapBlock />
        <ActionCard onPrimaryLocationClick={this._openPlacesCard} />
        <PlacesCard isCardOpen={this.state.isPlacesCardOpen} />
      </View>
    );
  },

  _openPlacesCard() {
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
  }
});

export default App;
