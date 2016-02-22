import React from 'react-native';
import Modal from '../libs/react-native-modalbox';
const {
  Text,
  StyleSheet,
  View
} = React;

const PlacesCard = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount() {
    // setTimeout(() => this.refs.autocompleteModal.open(), 5700);
  },

  render: function() {
    return (
      <Modal style={[styles.modal]} backdrop={true}  osition={"top"} ref={"autocompleteModal"}>
        <Text style={[styles.text, {color: "black"}]}>hello</Text>
      </Modal>
    );
  },
});

const styles = StyleSheet.create({

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  modal1: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  text: {
    color: "black",
    fontSize: 22
  }
});

export default PlacesCard;