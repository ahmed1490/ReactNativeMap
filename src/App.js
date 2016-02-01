import React from 'react-native';
const {
  View,
  StyleSheet,
  Text
} = React;
import GeoInfo from './components/GeoInfo'

const App = React.createClass({

  getInitialState() {
    return {};
  },

  render() {
    return (<GeoInfo />);
  },

});

const styles = StyleSheet.create({
});

export default App;