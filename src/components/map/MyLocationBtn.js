import React from 'react-native';
const {
  View,
  Text,
  PropTypes,
  StyleSheet,
  PixelRatio
} = React;
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

class MyLocationBtn extends React.Component {

  render() {
    return (
      <Button containerStyle={styles.locationIcon}>
        <Icon name="navigate" size={18} color='#0092DA' style={{width:20, marginTop: 2}} />
      </Button>
    );
  }
};

const styles = StyleSheet.create({
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

export default MyLocationBtn;