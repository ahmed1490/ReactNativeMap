var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
} = React;
import MapView from 'react-native-maps';


//have pure render mixin
var StartPin = React.createClass({
  getDefaultProps() {
    return {
      fontSize: 13,
    };
  },

  shouldComponentUpdate(props, nextProps) {
    return false;
  },

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <Text style={[styles.amount, { fontSize: this.props.fontSize }]}>{this.props.amount}</Text>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginBottom: 95
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#FF5A5F',
    padding: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#D23F44',
    borderWidth: 0.5,
  },
  amount: {
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 3,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#FF5A5F',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 4,
    borderColor: 'transparent',
    borderTopColor: '#D23F44',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

module.exports = StartPin;
