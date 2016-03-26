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

import BackdropContent from './action_card/BackdropContent';

const cardSizeClass = {

}

class ActionCard extends React.Component {

  static propTypes = {
    cardPartialHide: PropTypes.object,
    onPrimaryLocationClick: PropTypes.func
  };
  static defaultProps = {
  };
  state = { 
    showMoreOptions: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.showMoreOptions !== nextState.showMoreOptions ;
  }

  componentDidMount() {
    // setTimeout(() => this.refs.actionCard.open(), 1000);
  }

  _showMoreOptions(event) {
    console.log('showmore options')
    this.setState({showMoreOptions: true});
  }

  _hideMoreOptions(event) {
    this.setState({showMoreOptions: false});
  }

  _handlePress(event) {
    console.log('Pressed!');
  }

  render() {
    const cardWithOptions = this.state.showMoreOptions ? styles.cardWithOptions: '';
    const optionButtonVisibleStyle = this.state.showMoreOptions ? styles.hidden : '';
    const optionsVisibleStyle = this.state.showMoreOptions ? '' : styles.hidden;

    const BContent = <BackdropContent onBackClick={this._hideMoreOptions.bind(this)} />

    console.log('actioncard')
    return (
      <Modal style={[styles.card, cardWithOptions]} ref={"actionCard"}
        isOpen={true} position={"bottom"} animationDuration={200}
        backdrop={this.state.showMoreOptions} backdropPressToClose={false} backdropContent={BContent}
        onBackdropPress={this._hideMoreOptions.bind(this)}>

        <Button
          containerStyle={[]}
          styleDisabled={{color: 'grey'}}
          onPress={this.props.onPrimaryLocationClick}
        >
          <Icon name="ios-location-outline" size={24} style={[styles.button_image]} />
          <View style={[styles.button_label, styles.vertical_center, styles.lightBottomBorder]}>
            <Text style={[styles.button_text]}>Rosenthalar Platz</Text>
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