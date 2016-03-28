import React from 'react-native';
import Modal from '../libs/react-native-modalbox';
import Button from 'react-native-button';
const {
  Text,
  StyleSheet,
  View,
  PixelRatio,
  PropTypes,
  Animated
} = React;
import Icon from 'react-native-vector-icons/Ionicons';

import BackdropContent from './BackdropContent';

const cardSizeClass = {

}

class ActionCard extends React.Component {

  static propTypes = {
    isRegionUpdating: PropTypes.bool,
    journey: PropTypes.object,

    setOptionsVisible: PropTypes.func,

    cardPartialHide: PropTypes.object
  };
  static defaultProps = {
    cardPartialHide: new Animated.Value(0)
  };
  state = {};

  componentDidMount() {
    // setTimeout(() => this.refs.actionCard.open(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    Animated.spring(
      this.props.cardPartialHide,
      {
        toValue: this.props.isRegionUpdating ? 0 : 1,
        friction: 7
      }
    ).start();
  }

  _showMoreOptions(event) {
    this.props.setOptionsVisible(true);
  }

  _hideMoreOptions(event) {
    this.props.setOptionsVisible(false);
  }

  _handlePress(event) {
    console.log('Pressed!');
  }

  render() {
    const isOptionsVisible = this.props.journey.isOptionsVisible;
    const cardWithOptions = isOptionsVisible ? styles.cardWithOptions: '';
    const optionButtonVisibleStyle = isOptionsVisible ? styles.hidden : '';
    const optionsVisibleStyle = isOptionsVisible ? '' : styles.hidden;

    const BContent = <BackdropContent onBackClick={this._hideMoreOptions.bind(this)} />

    // console.log('actioncard')
    return (
      <Modal style={[styles.card, cardWithOptions, {opacity: this.props.cardPartialHide}]} ref={"actionCard"}
        isOpen={true} position={"bottom"} animationDuration={200}
        backdrop={isOptionsVisible} backdropPressToClose={false} backdropContent={BContent}
        onBackdropPress={this._hideMoreOptions.bind(this)}>

        <Button
          containerStyle={[]}
          styleDisabled={{color: 'grey'}}
          onPress={this.props.onPrimaryLocationClick}
        >
          <Icon name="ios-location-outline" size={24} style={[styles.button_image]} />
          <View style={[styles.button_label, styles.vertical_center, styles.lightBottomBorder]}>
            <Text style={[styles.button_text]}>
              {this.props.journey.start}
            </Text>
          </View>
        </Button>

        <Button
          containerStyle={[optionButtonVisibleStyle]}
          styleDisabled={{color: 'grey'}}
          onPress={this._showMoreOptions.bind(this)}
        >
          <Icon name="ios-gear-outline" size={24} style={[styles.button_image]} />
          <View style={[styles.button_label, styles.vertical_center]}>
            <Text style={[styles.button_text]}>Options</Text>
          </View>
        </Button>

        <Button
          containerStyle={[styles.darkBottomBorder, optionsVisibleStyle]}
          styleDisabled={{color: 'grey'}}
          onPress={this._handlePress}
        >
          <Icon name="ios-gear-outline" size={24} style={[styles.button_image]} />
          <View style={[styles.button_label, styles.vertical_center]}>
            <Text style={[styles.button_text]}>Destination</Text>
          </View>
        </Button>


        <Button
          containerStyle={[styles.buttonOption, optionsVisibleStyle]}
          onPress={this._handlePress}
        >
          <Icon name="ios-gear-outline" size={24} style={[styles.button_image]} />
          <View style={[styles.button_label, styles.vertical_center, styles.lightBottomBorder]}>
            <Text style={[styles.button_text]}>Pickup Time</Text>
          </View>
        </Button>


        <Button
          containerStyle={[styles.buttonOption, styles.darkBottomBorder, optionsVisibleStyle]}
          onPress={this._handlePress}
        >
          <Icon name="ios-gear-outline" size={24} style={[styles.button_image]} />
          <View style={[styles.button_label, styles.vertical_center]}>
            <Text style={[styles.button_text]}>Order Details</Text>
          </View>
        </Button>

        <Button
          containerStyle={[styles.vertical_center, styles.buttonPrimary]}
          onPress={this._handlePress}
        >
          <Text style={[styles.button_text, styles.buttonPrimary_text]}>Order a taxi!</Text>
        </Button>

      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    height: 160
  },

  cardWithOptions: {
    height: 260,
  },

  vertical_center: { //vertical center the content inside
    flexDirection: 'column',
    justifyContent: 'center',
  },

  button_image: {
    width: 30,
    marginLeft: 20,
  },

  button_label: {
    flex: 1, //take rest of the space
    height: 50,
    marginRight: 20
  },

  buttonPrimary: {
    height: 60,
    backgroundColor: '#FFE550'
  },

  buttonOption: {
    backgroundColor: '#F9F9F9'
  },

  lightBottomBorder: {
    //https://github.com/FaridSafi/react-native-gifted-form/blob/master/widgets/TextInputWidget.js#L165
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#c8c7cc',
  },

  darkBottomBorder: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#EDEDED',
  },

  hidden: {
    height: 0,
    overflow: 'hidden',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },

  button_text: {
    fontSize: 19,
  },

  buttonPrimary_text: {
    fontSize: 22,
    textAlign: 'center',
    alignSelf: 'center'
  }
});

export default ActionCard;

/*https://developers.google.com/places/android-api/
https://console.developers.google.com/apis/credentials?project=reactnativemaps*/