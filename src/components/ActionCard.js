import React from 'react-native';
import Modal from '../libs/react-native-modalbox';
import Button from 'react-native-button';
const {
  Text,
  StyleSheet,
  View,
  PixelRatio
} = React;
import Icon from 'react-native-vector-icons/Ionicons';


const ActionCard = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount() {
    setTimeout(() => this.refs.card.open(), 400);
    // this.setState({height: 300})
    // setTimeout(() => this.setState({height: 600}), 3000);
  },

  _handlePress(event) {
    console.log('Pressed!');
  },

  render: function() {
    return (
      <Modal style={[styles.modal, styles.card]} backdrop={false}  position={"bottom"} ref={"card"}>
        <Button
          containerStyle={[styles.button]}
          styleDisabled={{color: 'grey'}}
          onPress={this.props.onPrimaryLocationClick}
        >
          <Icon name="ios-location-outline" size={24} style={[styles.button_image]} />
          <View style={[styles.button_row]}>
            <Text style={[styles.button_text]}>Rosenthalar Platz</Text>
          </View>
        </Button>

        <Button
          containerStyle={[styles.button]}
          styleDisabled={{color: 'grey'}}
          onPress={this._handlePress}
        >
        <Icon name="ios-gear-outline" size={24} style={[styles.button_image]} />
          <View style={[styles.button_row]}>
            <Text style={[styles.button_text]}>Options</Text>
          </View>
        </Button>

        <Button
          containerStyle={[styles.button, styles.buttonPrimary]}
          styleDisabled={{color: 'grey'}}
          onPress={this._handlePress}
        >
          <Text style={[styles.button_text, styles.buttonPrimary_text]}>Order a taxi!</Text>
        </Button>

      </Modal>
    );
  },
});

const styles = StyleSheet.create({

  modal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    height: 180,
    // backgroundColor: "#3B5998",
    alignItems: 'stretch',
  },

  button: {
    height: 60,
    backgroundColor: '#fff',

    //vertical center the content inside
    flexDirection: 'column',
    justifyContent: 'center',
  },

  button_image: {
    width: 30,
    marginLeft: 20,
  },

  button_row: {
    flex: 1, //take rest of the space
    height: 60,
    marginRight: 20,

    //vertical center the content inside
    flexDirection: 'column',
    justifyContent: 'center',

    //https://github.com/FaridSafi/react-native-gifted-form/blob/master/widgets/TextInputWidget.js#L165
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#c8c7cc',
  },

  buttonPrimary: {
    backgroundColor: '#FFE550'
  },

  button_text: {
    fontSize: 19,
  },

  buttonPrimary_text: {
    fontSize: 22,
    textAlign: 'center',
    alignSelf: 'center'
  },

});

export default ActionCard;

/*https://developers.google.com/places/android-api/
https://console.developers.google.com/apis/credentials?project=reactnativemaps*/