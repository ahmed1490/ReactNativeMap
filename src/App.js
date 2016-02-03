import React from 'react-native';
const {
  View,
  StyleSheet,
  Text
} = React;
import GeoInfo from './components/GeoInfo';
import MapBlock from './components/MapBlock';

const App = React.createClass({

  getInitialState() {
    return {};
  },

  render() {
    return (
      <View style={styles.container}>
        <MapBlock />
      </View>
    );
  },

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
});

export default App;