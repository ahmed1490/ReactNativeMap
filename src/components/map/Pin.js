import React from 'react-native';
const {
  View,
  Text,
  PropTypes,
  StyleSheet,
  Animated,
  PixelRatio
} = React;
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

class Pin extends React.Component {

  render() {
    return (
      <View pointerEvents="none" style={styles.pinWrapper}>
        <Icon name="location" pointerEvents="none" style={[styles.pin, styles.shadow]} size={35} />
        <View style={[styles.verticalLine, styles.shadow]}></View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  pinWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  pin: {
  },

  shadow: {
    //android only
    // elevation: 3,

    //ios only
    shadowColor: "#000000",
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: -2/PixelRatio.get(),
      width: 2/PixelRatio.get(),
    }
  },

  verticalLine: {
    width: 3/PixelRatio.get(),
    backgroundColor: 'black',
    height: 20,
    position: 'relative',
    left: -1 / PixelRatio.get(),
    top: -18,
  }
});

export default Pin;